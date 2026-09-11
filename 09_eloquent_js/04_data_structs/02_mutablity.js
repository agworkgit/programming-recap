/* We will get to actual programming soon, but first, there's one more piece of theory to understand. We saw that object values can be modified. The types of values discussed in earlier chapters, such as nums, strings, and booleans, are all 'immutable' -- it is impossible to change values of those types. You can combine them and derive new values from them, but when you take a specific string value, that value will always remain the same. The text inside it cannot be changed. If you have a string that contains "rat", it is not possible for other code to change a character in your string to make it spell "rat". */

/* Objects work differently. You 'can' change their properties, causing a single object value to have different content at different times. When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. */

let object1 = { value: 10 }; // individual reference
let object2 = object1; // refers back to object1
let object3 = { value: 10 }; // individual reference

console.log(object1 == object2);
// -> true
console.log(object1 == object3);
// -> false
object1.value = 15;
console.log(object2.value);
// -> 15
console.log(object3.value);
// -> 10

/* The 'object1' and 'object2' bindings grasp the 'same' object, which is why changing 'object1' also changes the value of 'object2'. They are said to have the same 'identity'. */
/* A 'const' binding to an object can itself not change and will continue to point at the same object, the 'contents' of that object can change. */

const score = { visitors: 0, home: 0 };
// This is okay
score.visitors = 1;
// this isn't allowed
// score = { visitors: 1, home: 1 };

/* When you compare objects with JS's '==' operator, it compares by identity: it will produce 'true' only if both objects are precisely the same value. Comparing different objects will return 'false', even if they have identical properties. There is no "deep" comparison operator built into JS that compares objects by contents, but it is possible to write it yourself. */
