# Figma Kaleidescope

This demonstrates using the Figma REST API to use symbols loaded from a
Figma file to create a pop-art rendition of an image

## API Usage

We use 2 endpoints in this project:

- `GET /v1/files/:file_key` - Get the JSON representation of a file to extract top level frames (the symbols)
- `GET /v1/images/:file_key` - Render each frame as an image

We render each of the top level frames in your Figma document and use those rendered images
to fill in the input file provided.

## Set up

1. Update `API_TOKEN` in kaleidescope.py with your personal access token.
2. Run `python kaleidescope.py INPUT_FILE FILE_KEY` where `FILE_KEY` is the figma file where the symbols you want to use is and `INPUT_FILE` is the image you want to render.

Your output image will appear as `out.png`.
