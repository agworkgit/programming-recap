/* Each 'binding' has a 'scope' which is the part of the program in which the binding is visible 
For bindings defined outside of any function, block, or module, the scope is 'global'
*/

/* Bindings created for function params or declared inside a function can be referenced only in that function, so they are known as 'local' bindings */

/* Bindings declared with 'let' and 'const' are local to the 'block' in which they are decalared, so if you create one of these inside of a loop, the code before and after the loop can't see it */

let log = console.log;

const halve = function (n) {
  return n / 2;
};

let n = 10;

log(halve(100));
// -> 50
log(n);
// -> 10
