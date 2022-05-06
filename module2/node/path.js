const { extname } = require("path");
let path = require("path");



// join function
// Task -> I wana add a file name in a directory
let newFile1 = __dirname + "\\test2.js";
// Above is one way, but I had to know the style of directory name
// Problem -> I don't know what is the style of directory name,
// it could be any of these way -> // / \
// therefor join function let us do our task just by writing file name
let newFile2 = path.join(__dirname, "test3.js");

console.log(newFile1);
console.log(newFile2);
