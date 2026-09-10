/* Bindings/variables */

let caught = 5 * 5;

console.log(caught * 2);
// -> 50

/* Pointing to new values */

let moon = "light";
console.log(moon);
// -> light

moon = "dark";
console.log(moon);
// -> dark

/* Think of bindings/variables as tentacles, not boxes, they graps onto values, not hold them forever */

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// -> 105

/* When you define a binding without giving it a value that tentacle has nothing to grasp, it just hangs in thin air waiting
If you ask for the value on an empty binding you'll get 'undefined'
*/

/* A single 'let' statement may define multiple bindings */

let one = 1,
  two = 2;
console.log(one + two);
// -> 3

/* 'const' bindings are used to name a value that doesn't need to change, e.g. the value of PI */

const PI = Math.PI;
console.log(PI);

/* 'var' is pre-2015 syntax and should no longer be used! Will cause odd behaviours */
