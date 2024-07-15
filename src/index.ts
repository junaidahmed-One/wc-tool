#!/usr/bin/env node

import { program } from "commander";
import {
	numberOfbytes,
	numberOfCharacters,
	numberOfLines,
	numberOfWords,
} from "./util";
import path from "path";

program
	.version("1.0.0")
	.description("test wc")
	.option("-c, --byte <filePath>", "number of bytes", numberOfbytes)
	.option("-l, --lines <filePath>", "number of lines")
	.option("-w, --words <filePath>", "number of words")
	.option("-m, --chars <filePath>", "number of characters")
	.argument("[filePath]", "displays all functionalities supported")
	.action(async (filePath, options) => {
		const enteredFlags = Object.keys(options).filter(
			(flag) => options[flag]
		);
		if (enteredFlags.length === 0 && filePath) {
			try {
				const [lines, words, chars, bytes] = await Promise.all([
					numberOfLines(filePath),
					numberOfWords(filePath),
					numberOfCharacters(filePath),
					numberOfbytes(filePath),
				]);
				console.log(`Number of lines: ${lines}`);
				console.log(`Number of words: ${words}`);
				console.log(`Number of characters: ${chars}`);
				console.log(`Number of bytes: ${bytes}`);
			} catch (error) {
				console.error(error);
			}
		} else {
			switch (enteredFlags[0]) {
				case "byte":
					console.log(`Number of bytes in a file : ${options.byte}`);
					break;
				case "lines":
					const line = await numberOfLines(options.lines);
					console.log(`Number of lines : ${line}`);
					break;
				case "words":
					const words = await numberOfWords(options.words);
					console.log(`Number of words : ${words}`);
					break;
				case "chars":
					const totChars = await numberOfCharacters(options.chars);
					console.log(`Number of Characters : ${totChars}`);
					break;
				default:
					console.log(
						`Name ${options.name} Number of bytes in a file : ${options.file}`
					);
			}
		}
	});

program.parse(process.argv);
