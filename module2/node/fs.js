let fs = require("fs");
let path = require("path");

let newFilePath = path.join(__dirname, "file.txt");

// writeSync function -> creates and write on a file
// takes two arguments 
// 1) path as a string
// 2) content as a string
fs.writeFileSync(newFilePath, "I am created using js");