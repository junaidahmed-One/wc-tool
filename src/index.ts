#!/usr/bin/env node

import { program } from "commander";

program
	.version("1.0.0")
	.description("test wc")
	.option("-n, --name <name>", "your name")
	.action((options) => {
		console.log(`Hello ${options.name || "world"}`);
	});

program.parse(process.argv);
