// One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

// To use the require() statement, a module must be saved with .js extension as opposed to .mjs when the import() statement is used.

// ES modules can be loaded dynamically via the import() function unlike require().
//How can you enable using the import syntax using node js - import { func1 } from "./exportFunc.mjs"; && *.mjs

// Give 2 node.js environment variables that are not available
// when using the import syntax. - require, module.exports

import { func1, func2, func3 } from "./exportFunc.mjs";

console.log(func1());
console.log(func2());
console.log(func3());
