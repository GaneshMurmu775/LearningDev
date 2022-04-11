// child_process gives an object

let cp = require('child_process');
/* 
-> require is a function that 
fetches an object from child_process
-> I have stored object in variable "cp"
*/

console.log(cp);
/* 
If I display cp I get an object where 
execFileSync is one of the function 
*/

cp.execFileSync("calc");
// Above I have just called cp.execFileSync function