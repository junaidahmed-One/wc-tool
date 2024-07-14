import { error } from "console";
import * as fs from "fs";
import path from "path";
import { types } from "util";

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
	const info = await read(resolvedPath);
	//console.log(info);
	const temp = info.split("\r\n");
	return temp.length;
}

export { numberOfbytes, numberOfLines };
