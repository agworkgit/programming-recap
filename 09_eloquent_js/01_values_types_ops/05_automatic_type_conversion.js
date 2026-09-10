// JS goes out of its way to accept almost any program, even programs that do odd things

console.log(8 * null);
// -> 0

console.log("5" - 1);
// -> 4

console.log("5" + 1);
// -> 51

console.log("five" * 2);
// -> NaN

console.log(false == 0);
// -> true

/* 
JavaScript will quietly convert the "wrong" value to the type it needs, using a set of rules that often aren't what you want or expect. This is called "type coercion"
*/

console.log(null == undefined);
// -> true

console.log(null == 0);
// -> false

/* 
When you don't want automatic type conversion use === (precisely equal to) and !== (precisely not equal to)
*/

console.log("" === false);
// -> false
