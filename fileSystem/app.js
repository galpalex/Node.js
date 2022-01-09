//const testFolder = "./";
const newFolder = "./testFolder";
const fs = require("fs");

//1
//fs.writeFileSync("notes.txt", "My name is ALex.");
//2
//fs.copyFileSync("notes.txt", "copy_notes.txt");
//3
//fs.renameSync("notes.txt", "renamed_notes.txt");
//4
// fs.readdirSync(testFolder).forEach((file) => {
//   console.log(file);
// });
//5 Synchronously creates a directory.
fs.mkdirSync(newFolder);
// if (!fs.existsSync(testFolder)) {
//   fs.mkdirSync(testFolder);
// }
