let fs = require("fs");
let path = require("path");

let newFilePath = path.join(__dirname, "file.txt");

fs.writeFileSync(newFilePath, "I am created using js");

// ***appendFileSync Function
fs.appendFileSync(newFilePath, "\nI am a text appended in file.txt")

let content = fs.readFileSync(newFilePath, 'utf-8');
console.log(content);
