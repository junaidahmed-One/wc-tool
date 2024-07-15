#!/usr/bin/env node

import { program } from "commander";
import {
	numberOfbytes,
	numberOfCharacters,
	numberOfLines,
	numberOfWords,
} from "./util";

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
				console.log(
					`Number of lines: ${lines} Number of words: ${words} Number of characters: ${chars} Number of bytes: ${bytes}`
				);
			} catch (error) {
				console.error(error);
			}
		} else {
			switch (enteredFlags[0]) {
				case "byte":
					console.log(`Number of bytes in a file : ${options.byte}`);
					break;
				case "lines":
					try {
						const line = await numberOfLines(options.lines);
						console.log(`Number of lines : ${line}`);
					} catch (error) {
						console.log("Unable to get number of lines..");
					}
					break;
				case "words":
					try {
						const words = await numberOfWords(options.words);
						console.log(`Number of words : ${words}`);
					} catch (error) {
						console.log("Unable to get number of words..");
					}
					break;
				case "chars":
					try {
						const totChars = await numberOfCharacters(
							options.chars
						);
						console.log(`Number of Characters : ${totChars}`);
					} catch (error) {
						console.log("Unable to get number of characters..");
					}
					break;
				default:
					console.log(
						`Name ${options.name} Number of bytes in a file : ${options.file}`
					);
			}
		}
	});

program.parse(process.argv);
