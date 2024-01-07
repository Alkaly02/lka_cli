#!/usr/bin/env node
// const clearConsole = require('clear-any-console');
const pkgJSON = require("./package.json")
const welcome = require('cli-welcome');

// Clears the console.
// clearConsole();
// console.log(`
// NAME: ${pkgJSON.name}
// VERSION: ${pkgJSON.version}
// DESCRIPTION: ${pkgJSON.description}
// `)
// OR with all the options set like this:
welcome({
    title: pkgJSON.name,
    tagLine: pkgJSON.author,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
    version: pkgJSON.version,
    description: pkgJSON.description
});
console.log("Alkaly BADJI");