/*
There are several ways to take data (a string of code) and run it as part of the current program.

The most obvious way is the special operator eval, which will execute a string of code in the 
current scope. 
*/
function evalAndReturnX(code) {
  eval(code);
  return x;
}

console.log(evalAndReturnX("var x = 2"));
// → 2

/*
This is usually a bad idea because it breaks some of the sane properties that scopes normally 
have, such as being isolated from the outside world.
*/

