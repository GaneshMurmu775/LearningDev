const { extname } = require("path");
let path = require("path");

// __filename -> returns file path
// __dirname -> return dir path
let baseName = path.basename(__filename);
console.log(baseName);
