import argparse
import requests
import random
from PIL import Image
from io import BytesIO

BLOCK_W = 8
BLOCK_H = 8

def extract_symbols(doc, file_key, headers):
    canvas = doc['document']['children'][0]
    symbols = []
    guids = []
    for node in canvas['children']:
        if node['type'] == 'FRAME':
            guids.append(node['id'])
    url = "https://api.figma.com/v1/images/{}?ids={}&format=png&scale=0.0625".format(file_key, ','.join(guids))
    print("Calling {}".format(url))
    resp = requests.get(url, headers=headers)
    for img_id, img_url in resp.json()['images'].items():
        img_resp = requests.get(img_url)
        im = Image.open(BytesIO(img_resp.content))
        loaded = im.load()
        lightness = 0
        for n in range(BLOCK_W):
            for m in range(BLOCK_H):
                x = loaded[n, m]
                lightness += x[0] + x[1] + x[2]

        symbols.append([lightness, loaded])
    symbols.sort()

    max_cap = 225*3*BLOCK_W*BLOCK_H
    min_val = symbols[0][0]
    max_val = symbols[-1][0]
    ratio = max_cap / (max_val - min_val)
    for symbol in symbols:
        symbol[0] = ratio * (symbol[0] - min_val)

    return symbols

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Draw an image with Figma symbols.')
    parser.add_argument('image', type=str, help='image file to render')
    parser.add_argument('file_key', type=str, help='file key from Figma for symbols')
    args = parser.parse_args()

    API_TOKEN = 'REPLACE_ME'

    url = "https://api.figma.com/v1/files/{}".format(args.file_key)
    headers = {'X-Figma-Token': API_TOKEN}
    resp = requests.get(url, headers=headers)
    symbols = extract_symbols(resp.json(), args.file_key, headers)

    im = Image.open(args.image)

    w, h = im.size
    if w > 800:
        h = (800 * h) // w
        w = 800

    h -= h % BLOCK_H
    w -= w % BLOCK_W
    im = im.resize((w, h))
    out_img = Image.new('RGB', (w, h))

    h_blocks = h // BLOCK_H
    w_blocks = w // BLOCK_W
    data = im.load()

    for i in range(w_blocks):
        for j in range(h_blocks):
            lightness = 0
            for n in range(BLOCK_W):
                for m in range(BLOCK_H):
                    x = i*BLOCK_W + n
                    y = j*BLOCK_H + m

                    a = data[x, y]
                    lightness += a[0] + a[1] + a[2]


            match = symbols[0][1]
            diff = abs(symbols[0][0] - lightness)
            for light, im in symbols:
                if light > lightness and light - lightness > diff:
                    break
                diff = abs(light - lightness)
                match = im

            for n in range(BLOCK_W):
                for m in range(BLOCK_H):
                    x = i*BLOCK_W + n
                    y = j*BLOCK_H + m

                    pxl = match[n, m]
                    out_img.putpixel((x, y),(pxl[0], pxl[1], pxl[2]))

    out_img.save('out.png')
