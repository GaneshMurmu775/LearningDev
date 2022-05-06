let fs = require("fs");
let path = require("path");

let newFilePath = path.join(__dirname, "file.txt");

fs.writeFileSync(newFilePath, "I am created using js");


/* 
readFileSync function -> reads file,
takes two or one arguments
1) path of the file
2) encoding 'utf-8' (optional)   
*/
let content = fs.readFileSync(newFilePath, 'utf-8');
console.log(content);
