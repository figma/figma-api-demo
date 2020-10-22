require('dotenv').config();
const fetch = require('node-fetch');
const fs = require('fs');
const figma = require('./lib/figma');
const axios = require('axios');

const headers = new fetch.Headers();
const componentList = [];
let devToken = process.env.DEV_TOKEN;

if (process.argv.length < 3) {
	console.log('Usage: node setup.js <file-key> [figma-dev-token]');
	process.exit(0);
}

if (process.argv.length > 3) {
	devToken = process.argv[3];
}

headers.append('X-Figma-Token', devToken);

const fileKey = process.argv[2];
const baseUrl = 'https://api.figma.com';

const vectorMap = {};
const vectorList = [];

const jpgMap = {};
const jpgList = [];

const vectorTypes = {
	RECTANGLE: 'RECTANGLE',
	VECTOR: 'VECTOR',
	LINE: 'LINE',
	REGULAR_POLYGON: 'REGULAR_POLYGON',
	ELLIPSE: 'ELLIPSE',
	STAR: 'STAR',
};

//except them, needs style
const blendMode = {
	PASS_THROUGH: 'PASS_THROUGH',
	NORMAL: 'NORMAL',
};

function preprocessTree(node) {
	let vectorsOnly = node.name.charAt(0) !== '#';
	let vectorVConstraint = null;
	let vectorHConstraint = null;

	function paintsRequireRender(paints) {
		if (!paints) return false;

		let numPaints = 0;
		for (const paint of paints) {
			if (!paint.visible) continue;

			numPaints++;
			if (paint.type === 'EMOJI') return true;
		}

		return numPaints > 1;
	}

	if (
		paintsRequireRender(node.fills) ||
		paintsRequireRender(node.strokes) ||
		(node.blendMode && !blendMode.hasOwnProperty(node.blendMode))
	) {
		node.type = 'VECTOR';
	}

	const children =
		(node.children && node.children.filter((child) => child.visible !== false)) || [];

	node.children = children;

	if (
		node.fills &&
		node.fills.some((fill) => fill.type === 'IMAGE' || vectorTypes.hasOwnProperty(node.type))
	) {
		node.type = 'VECTOR';
		vectorMap[node.id] = node;
		vectorList.push(node.id);
	} else {
		for (const child of node.children) {
			preprocessTree(child);
		}
	}
}

async function main() {
	let resp = await axios.get(`${baseUrl}/v1/files/${fileKey}`, {
		headers: {
			'X-Figma-Token': devToken,
		},
	});
	let data = resp.data;

	const doc = data.document;
	const canvas = doc.children[0]; //TODO : 첫번째 페이지에서만 Frame을 가져오도록 되어 있음 수정필요
	let html = '';
	let images = {};

	for (let i = 0; i < canvas.children.length; i++) {
		const child = canvas.children[i];

		// Frame 이름 앞에 #이 붙은 frame만 가져옴
		if (child.name.charAt(0) === '#' && child.visible !== false) {
			const child = canvas.children[i];
			preprocessTree(child);
		}
	}

	//svg로 가져와야 하는 nodeId들이 vectorList에 있음
	let guids = vectorList.toString();

	if (guids.length > 0) {
		data = await axios.get(`${baseUrl}/v1/images/${fileKey}`, {
			headers: {
				'X-Figma-Token': devToken,
			},
			params: {
				ids: guids,
				format: 'svg',
			},
		});
		const imageJSON = data.data;

		// {nodeId : image S3 path}
		images = imageJSON.images || {};

		if (images) {
			let promises = [];
			let guids = [];
			for (const guid in images) {
				if (images[guid] == null) continue;
				guids.push(guid);
				promises.push(axios.get(images[guid]));
			}

			let responses = await Promise.all(promises);
			promises = [];

			responses.forEach((data) => promises.push(data.data));
			// responses = await Promise.all(promises);

			for (let i = 0; i < promises.length; i++) {
				images[guids[i]] = promises[i]
					.replace('<svg ', '<svg preserveAspectRatio="none" ')
					.replace(/pattern0/g, `pattern${i}`)
					.replace(/image0/g, `image${i}`);
			}
		}
	}

	const componentMap = {};

	const startContents = `<!DOCTYPE html>
							<html lang="en">
								<head>
									<meta charset="utf-8" />
									<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
									<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
									<link rel="stylesheet" type="text/css" href="../index.css" />
								</head>
								<body>
									<div class="master" style="background-color: rgb(255, 255, 255);">`;

	const endContents = `			</div>
								</body>
							</html>`;

	let contents = startContents;

	for (let i = 0; i < canvas.children.length; i++) {
		const child = canvas.children[i];
		if (child.name.charAt(0) === '#' && child.visible !== false) {
			const child = canvas.children[i];
			figma.createComponent(child, images, componentMap);
		}
	}

	for (const key in componentMap) {
		const path = `./src/html/${componentMap[key].name}.html`;
		contents += componentMap[key].doc;
		contents += endContents;

		fs.writeFile(path, contents, function (err) {
			if (err) console.log(err);
			console.log(`wrote ${path}`);
		});
		contents = startContents;
	}
}

main().catch((err) => {
	console.error(err);
	console.error(err.stack);
});