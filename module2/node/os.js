let cp = require('child_process');

// About exeSync Function
// exeSync function opens terminal and writes
// whatever the fuck is given as argument on terminal
// and returns the result in binary form which can be 
// further converted to string 
// below is the proof

let x = cp.execSync("node test.js");

console.log(x); //This gives binary output
console.log("" + x); //Here binary result is converted to string

//Child process enables us to execute another file while one is executing


 