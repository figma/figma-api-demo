# Figma Api Spellchecker

This demonstrates using the Figma REST API to spell check copy
in a Figma file.

## API Usage

We use 2 endpoints in this project:

- `GET /v1/files/:file_key` - Download a JSON representation of a Figma document.
- `POST /v1/files/:file_key/comments` - Post a comment to a Figma file.

We load the JSON Figma document and iterate over it to find all `TEXT` nodes. For 
each `TEXT` node, we check the spelling of the contents. If we find any possible
spelling errors, we post a comment explaining the error on the upper left hand
 corner of the node. 
 
## Set up

1. Clone the repo and `npm install`
2. Update `file_id` and `personal_access_token` in `app.ts`. 
    - `file_id` can be found in the Figma file's url `http://figma.com/file/<file_id>`
    - `personal_access_token` can be found in Account Settings (you may need to generate your token)
3. Run `npm run build` to build the project.
4. Run `npm run spellcheck` to spellcheck and comment on your document.
