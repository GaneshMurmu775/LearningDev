let fs = require("fs");
let path = require("path");

let newFilePath = path.join(__dirname, "file.txt");

fs.unlinkSync(newFilePath);