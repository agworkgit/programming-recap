/* We can read properties like 'length' and 'toUpperCase' from string values. But if we try to add a new property, it doesn't stick. */

let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// -> undefined

/* Values of type string, number, and Boolean are not objects, and though the language doesn't complain if you try to set new properties on them, it doesn't actually store those properties. As mentioned earlier, such values are 'immutable' and cannot be changed. */
/* But these types do have built-in properties. Every string value has a number of methods. Some very useful ones are 'slice' and 'indexOf', which resemble the array methods of the same name. */

console.log("coconuts".slice(4, 7));
// -> nut
console.log("coconut".indexOf("u"));
// -> 5

/* One difference is that a string's 'indexOf' can search for a string containing more than one character, whereas the corresponding array method looks only for a single element. */

console.log("one two three".indexOf("ee"));
// -> 11

/* The 'trim' method removes whitespaces (spaces, newlines, tabs, and similar characters) from the start and end of a string. */

console.log("    okay\n  ".trim());
// -> okay

/* The zeroPad function from the previous chapter also exists as a method. It is called 'padStart' and takes the desired length and padding character as arguments. */

console.log(String(6).padStart(3, "0"));
// -> 006

/* You can split a string on every occurance of another string with 'split' and join it again with 'join'. */

let sentence = "Secretarybirds specialise in stomping";
let words = sentence.split(" ");
console.log(words);
// -> ["Secretarybirds", "specialise", "in", "stomping"]
console.log(words.join(". "));
// -> "Secretarybirds. specialise. in. stomping"

/* A string can be repeated with the 'repeat' method, which creates a new string containing multiple copies of the original string, glued together. */

console.log("LA".repeat(3));
// -> "LALALA"

/* We have already seen the string type's 'length' property. Accessing the individual characters in a string looks like accessing array elements (with a complication that we will cover in Chapter 5) */

let string = "abc";
console.log(string.length);
// -> 3
console.log(string[1]);
// -> b
