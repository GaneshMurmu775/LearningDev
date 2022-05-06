const { extname } = require("path");
let path = require("path");

// extname() function takes path of a file
// as a string as an argument and returns file extension 
let extensionName = path.extname("C:\Users\ganes\Desktop\Learning\FJP\DEV\module2\node\path.js");
console.log(extensionName);

// baseame() function takes path of a file
// as a string as an argument and returns file name
// but below code is not working
let baseName = path.basename("C:\Users\ganes\Desktop\Learning\FJP\DEV\module2\node\path.js");
console.log(baseName);
