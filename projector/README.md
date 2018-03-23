# Figma Api Projector

This demonstrates using the Figma REST API to render and project an
image onto a mockup.

## API Usage

We use 1 endpoint in this project:

- `GET /v1/images/:file_key` - Render a frame from a specific Figma document and return a url to 
rendered image.

We render an image of a specific frame and use `perspective.js` to project that rendered
frame into several different mock ups. You could imagine using this to demo the design
for an app you are working on in Figma. 
 
## Set up

1. Update `PERSONAL_ACCESS_TOKEN` in `index.html`
2. Open `index.html` in a web browser.
3. Select a frame from a Figma document you want to project on to the mock ups and copy the url. 
    - Be sure the the url you copy includes the `node-id`. 
4. Input the frame url on `index.html` and click render.

You should see your frame projected into each image on the page.
