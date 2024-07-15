#!/usr/bin/env node

import { program } from "commander";
import { numberOfbytes, numberOfLines, numberOfWords } from "./util";
import path from "path";

program
	.version("1.0.0")
	.description("test wc")
	.option("-n, --name <name>", "your name")
	.option("-c, --byte <filePath>", "number of bytes", numberOfbytes)
	.option("-l, --lines <filePath>", "number of lines")
	.option("-w, --words <filePath>", "number of words")
	.action(async (options) => {
		const enteredFlags = Object.keys(options).filter(
			(flag) => options[flag]
		);
		switch (enteredFlags[0]) {
			case "name":
				console.log(`Name ${options.name}`);
				break;
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
			default:
				console.log(
					`Name ${options.name} Number of bytes in a file : ${options.file}`
				);
		}
	});

program.parse(process.argv);

// numberOfWords(
// 	"D://Cohort FullStack+DevOps//Projects//wc-tool//src//text.txt"
// ).then((num) => console.log(num));
