/* The || operator will return the value to its left when that value can be converted to 'true' and will return the value to its right otherwise */

console.log("user" || null);
// -> user

console.log("Agnes" || "user");
// -> Agnes

/* We can use this functionality as a way to fallback on a default value 
The rules for converting strings and numbers to Booleans state that 0, NaN, and the empty string count as 'false', while all the other values count as 'true'
*/

console.log(0 || -1);
// -> -1

console.log("" || "?!");
// -> ?!

/* The ?? operator resembles || but returns the value on the right only if the one on the left is 'null' or 'undefined', often this is preferable to the behaviour of || */

console.log(0 || 100);
// -> 100

console.log(0 ?? 100);
// -> 0

console.log(null ?? 100);
// -> 100

/* The && operator works similarly but the other way around. When the value to its left is something that converts to 'false', it returns that value, and otherwise it returns the value to its right */

console.log(true && "program");
// -> program
// -> if a 'false' evaluation the left part is returned

/* This is called short-circuiting evaluation, the ternary operator works in a similar way */
