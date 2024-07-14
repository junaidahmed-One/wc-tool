#!/usr/bin/env node

import { program } from "commander";
import { numberOfbytes } from "./util";
import path from "path";

program
	.version("1.0.0")
	.description("test wc")
	.option("-n, --name <name>", "your name")
	.option("-c, --file <filePath>", "Path to the file", numberOfbytes)
	.action((options) => {
		const enteredFlags = Object.keys(options).filter(
			(flag) => options[flag]
		);

		switch (enteredFlags[0]) {
			case "name":
				console.log(`Name ${options.name}`);
				break;
			case "file":
				console.log(`Number of bytes in a file : ${options.file}`);
				break;
			default:
				console.log(
					`Name ${options.name} Number of bytes in a file : ${options.file}`
				);
		}
		//console.log(enteredFlags);
	});

program.parse(process.argv);
