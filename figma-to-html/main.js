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

	// if (children && children.length > 0) {
	// 	for (let i = 0; i < children.length; i++) {
	// 		if (
	// 			vectorTypes.hasOwnProperty(children[i].type) &&
	// 			vectorVConstraint &&
	// 			vectorHConstraint &&
	// 			(vectorVConstraint !== children[i].constraints.vertical ||
	// 				vectorHConstraint !== children[i].constraints.horizontal)
	// 		) {
	// 			vectorsOnly = false;
	// 		} else {
	// 			vectorVConstraint = children[i].constraints.vertical;
	// 			vectorHConstraint = children[i].constraints.horizontal;
	// 		}
	// 	}
	// }
	node.children = children;

	// // 다시보기 vertical, horizontal 의 값이 어떻게 쓰이는지 알아야함
	// if (children && children.length > 0 && vectorsOnly) {
	// 	node.type = 'VECTOR';
	// 	node.constraints = {
	// 		vertical: vectorVConstraint,
	// 		horizontal: vectorHConstraint,
	// 	};
	// }
	if (node.fills && node.fills.some((fill) => fill.type === 'IMAGE')) {
		node.type = 'VECTOR';
		// jpgMap[node.id] = node;
		// jpgList.push(node.id);
		vectorMap[node.id] = node;
		vectorList.push(node.id);
	} else if (vectorTypes.hasOwnProperty(node.type)) {
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
	const canvas = doc.children[0]; //첫번째 페이지만 검사. 수정필요
	let html = '';
	let images = {};
	
	for (let i = 0; i < canvas.children.length; i++) {
		const child = canvas.children[i];
		if (child.name.charAt(0) === '#' && child.visible !== false) {
			const child = canvas.children[i];
			preprocessTree(child);
		}
	}

	let guids = vectorList.toString();
	console.log(guids);
	
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

	// let jpgNodeIds = jpgList.toString();
	// console.log(jpgNodeIds)
	// const jpgData = await fetch(`${baseUrl}/v1/images/${fileKey}?ids=${jpgNodeIds}&format=jpg`, { headers });
	// const jpgJSON = await jpgData.json();

	// // {nodeId : image S3 path}
	// const jpgIdsPairS3Url = jpgJSON.images || {};

	// for(let i = 0 ; i < jpgList.length ; i++){
	// 	images[jpgList[i]] = `<img src="${jpgIdsPairS3Url[jpgList[i]]}">`
	// }

	const componentMap = {};
	// let contents = `import React, { PureComponent } from 'react';\n`;
	// let nextSection = '';
	
	let contents = '<!DOCTYPE html>\n'
	
	for (let i = 0; i < canvas.children.length; i++) {
		const child = canvas.children[i];
		if (child.name.charAt(0) === '#' && child.visible !== false) {
			const child = canvas.children[i];
			figma.createComponent(child, images, componentMap);
			// nextSection += `export class Master${child.name.replace(
			// 	/\W+/g,
			// 	''
			// )} extends PureComponent {\n`;
			// nextSection += '  render() {\n';
			// nextSection += `    return <div className="master" style={{backgroundColor: "${figma.colorString(
			// 	child.backgroundColor
			// )}"}}>\n`;
			// nextSection += `      <C${child.name.replace(/\W+/g, '')} {...this.props} nodeId="${
			// 	child.id
			// }" />\n`;
			// nextSection += '    </div>\n';
			// nextSection += '  }\n';
			// nextSection += '}\n\n';
		}
	}

	// const imported = {};
	// for (const key in componentMap) {
	// 	const component = componentMap[key];
	// 	const name = component.name;
	// 	if (!imported[name]) {
	// 		contents += `import { ${name} } from './components/${name}';\n`;
	// 	}
	// 	imported[name] = true;
	// }
	// contents += '\n';
	// contents += nextSection;
	// nextSection = '';

	// contents += `export function getComponentFromId(id) {\n`;

	for (const key in componentMap) {
		// contents += `  if (id === "${key}") return ${componentMap[key].instance};\n`;
		// nextSection += componentMap[key].doc + '\n';
		
		const path = `./src/html/${componentMap[key].name}.html`;
		contents += componentMap[key].doc;
		
		fs.writeFile(path, contents , function (err) {
			if (err) console.log(err);
			console.log(`wrote ${path}`);
		});
		contents = '<!DOCTYPE html>\n'
	}

	// contents += '  return null;\n}\n\n';
	// contents += nextSection;

	// const path = './src/figmaComponents.js';
	
	
}

main().catch((err) => {
	console.error(err);
	console.error(err.stack);
});