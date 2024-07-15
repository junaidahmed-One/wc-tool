import * as fs from "fs";
import path from "path";

function numberOfbytes(filename: string) {
	const resolvedPath = path.resolve(filename);

	if (!fs.existsSync(resolvedPath)) {
		throw new Error(`File not found ${resolvedPath}`);
	}
	const byteSize = fs.statSync(resolvedPath).size;

	return byteSize;
}

const read = (path: string): Promise<String> =>
	new Promise((resolve, reject) => {
		fs.readFile(path, "utf-8", (err, file) => {
			if (err) reject(err);
			resolve(file);
		});
	});

async function numberOfLines(filename: string) {
	const resolvedPath = path.resolve(filename);

	if (!fs.existsSync(resolvedPath)) {
		throw new Error(`File not found ${resolvedPath}`);
	}

	const info = await read(resolvedPath);

	//splitting the text at line breaks
	const temp = info.split("\r\n");

	return temp.length;
}

async function numberOfWords(filename: string) {
	const resolvedPath = path.resolve(filename);

	if (!fs.existsSync(resolvedPath)) {
		throw new Error(`File not found ${resolvedPath}`);
	}

	const info = await read(resolvedPath);

	//remove newline characters, multiple spaces, leading and trailing spaces.
	const cleanData = info
		.replace(/[\r\n]+/g, " ")
		.replace(/\s+/g, " ")
		.trim();

	const words = cleanData.split(" ");

	return words.length;
}

async function numberOfCharacters(filename: string) {
	const resolvedPath = path.resolve(filename);

	if (!fs.existsSync(resolvedPath)) {
		throw new Error(`File not found ${resolvedPath}`);
	}

	const info = await read(resolvedPath);

	const chars = info.split("");
	return chars.length;
}

export { numberOfbytes, numberOfLines, numberOfWords, numberOfCharacters };
