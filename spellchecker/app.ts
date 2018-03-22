import * as request from 'request';
import * as traverse from 'traverse';
import * as spellchecker from 'spellchecker';
import {ErrorRange} from "spellchecker";

// REPLACE ME: replace these values with a file you own and with your own developer token.
const file_id = '<FILE KEY TO SPELLCHECK>';
const personal_access_token = '<INSERT YOUR PERSONAL ACCESS TOKEN>';

const api_endpoint = 'https://api.figma.com/v1';

function getTextNodes(figFile: any) {
  return traverse.nodes(figFile)
    .filter(node => hasKey(node, 'type') && node.type === 'TEXT')
}

function postComment(message: string, x: number, y: number) {
  request.post(
    `${api_endpoint}/files/${file_id}/comments`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-figma-token": personal_access_token,
      },
      body: JSON.stringify({
        message,
        client_meta: {
          x,
          y,
        },
      }),
    },
    requestErrorHandler);
}

function spellCheckTextNodes(textNodes: Array<any>) {
  textNodes.forEach(node => {
    const misspelledWords = spellchecker.checkSpelling(node.characters)
      .map((error: ErrorRange) => {
        return node.characters.slice(error.start, error.end)
      });

    if (misspelledWords.length > 0) {
      let annotation = 'You may have several misspellings.\n\n';

      misspelledWords.forEach((word: string) => {
        annotation += `${word} -> `;
        const corrections = spellchecker.getCorrectionsForMisspelling(word);

        if (corrections.length > 0) {
          annotation += corrections.slice(0, 3).join(', ')
        } else {
          annotation += '???'
        }

        annotation += '\n';
      });

      postComment(annotation, node.absoluteBoundingBox.x, node.absoluteBoundingBox.y);
    }
  })
}

request.get(`${api_endpoint}/files/${file_id}`, {
  headers: {
    "Content-Type": "application/json",
    "x-figma-token": personal_access_token,
  },
}, function (error, response, body) {
  requestErrorHandler(error, response, body);

  const textNodes = getTextNodes(JSON.parse(body));
  spellCheckTextNodes(textNodes);
});



function requestErrorHandler(error: any, response: request.RequestResponse, body: any) {
  if (error) {
    console.log(error);
    console.log(body);
    process.exit(1)
  }
}

function hasKey(node: any, key: string) {
  return node && typeof node === 'object' && key in node;
}