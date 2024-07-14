import * as fs from "fs";
import path from "path";

export function numberOfbytes(filename: string) {
	const resolvedPath = path.resolve(filename);

	if (!fs.existsSync(resolvedPath)) {
		throw new Error(`File not found ${resolvedPath}`);
	}
	const byteSize = fs.statSync(resolvedPath).size;

	return byteSize;
}
