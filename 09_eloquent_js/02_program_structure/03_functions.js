/* Showing a dialog box or writing text to a screen is a 'side effect', many functions are useful because of the side effects they produce, functions can also produce values in which case they don't need to have a side effect to be useful. */

console.log(Math.max(2, 4));
// -> returns 4

/* When a function produces a value, it is said to 'return' that value 
Anything that produces a value is an expression in JS, which means that function calls can be used in larger expressions
*/

console.log(Math.min(2, 4) + 100);
// -> 102
