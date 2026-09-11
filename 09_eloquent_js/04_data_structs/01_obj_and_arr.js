/* Nums, Bools, and strings are the atoms from which data structures are built. Many types of information require more than one atom, though. 'Objects' allow us to group values -- including other objects -- to build more complex structures. */

/* Datasets */

/* To work with a chunk of digital data, we first have to find a way to represent it in our machine's memory. To store sequences of numbers JS provides a data type specific for storing them, called an 'array' */

let listOfNums = [2, 3, 5, 7, 11];
console.log(listOfNums[2]);
// -> 5

/* Properties */

/* We've seen a few expressions like 'myStr.length' (to get the length of a string) and 'Math.max' (the maximum function) in past chapters. These expressions access a 'property' of some value. Almost all JS values have properties, with the exception of 'null' and 'undefined'. */

/* The two main ways to access properties in Js are with a dot and with square brackets. Both 'value[x]' and 'value.x' access a property on 'value' -- but not necessarily the same property. The difference is in how 'x' is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is 'evaluated' to get the property name. Whereas 'value.x' fetches the property of the value named "x", 'value[x]' takes the value of the variable named "x" and uses that, converted to a string, as the property name. */

/* Methods */

/* Both string and array values contain, in addition to the 'length' property, a number of properties that hold function values. */

let doh = "Doh";
console.log(doh.toUpperCase());
// -> DOH

/* Interestingly, even though the call to 'toUpperCase' does not pass any args, the function somehow has access to the string. We'll find out how this works later. */

/* Properties that contain functions are generally called 'methods' of the value they belong to, as in "toUpperCase is a method of a string". */

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// -> [1,2,3,4,5]
console.log(sequence.pop());
// -> 5
console.log(sequence);
// -> [1,2,3,4]

/* Objects */

/* Values of the type 'object' are arbitrary collections of properties (key-value pairs). */

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};

console.log(day1.squirrel);
// -> false
console.log(day1.wolf);
// -> undefined
day1.wolf = false;
console.log(day1.wolf);
// -> false

/* Properties whose names aren't valid binding names or valid numbers must be quoted. */

let descriptions = {
  work: "went to work",
  "touched tree": "Touched a tree",
};

/* This means that braces have 'two' meanings in JS. At the start of a statement, they begin a block of statements. In any other position they describe an object. The one special case to be aware of is when you want to return an object with an arrow function, you can't write 'n => {prop: n}' since the braces will be interpreted as a function body. Instead you have to put a set of parentheses around the object to make it clear that it's an expression. */

/* You can think of objects as octopuses with any number of tentacles, each of which has a name written on it. The 'delete' operator cuts off a tentacle from such an octopus. It is a unary operator that, when applied to an object property, will remove the named property from that object. This is not a common thing to do, but it's possible */

let anObject = { left: 1, right: 2 };
console.log(anObject.left);
// -> 1
delete anObject.left;
console.log(anObject.left);
// -> undefined
console.log("left" in anObject);
// -> false
console.log("right" in anObject);
// -> true

/* The binary 'in' operator, when applied to a string and an object, tells you whether that object has a property with that name. The difference between setting a property to 'undefined' and using 'delete' is that in the first case, the object 'still' has the property (it just doesn't have any value assigned) whereas in the second case, the property is no longer present and 'in' will return 'false'. */

/* To find out what properties an Object has, you can use the 'Object.keys' function. Give the function an object and it will return an array of strings, the object's property names. */

console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// -> ["x","y","z"]

/* There's an 'Object.assign' function that copies all properties from one object into another. */

let objA = { a: 1, b: 2 };
Object.assign(objA, { b: 3, c: 4 });
console.log(objA);
// -> {a:1, b:3, c:4}

/* Arrays, then, are just a kind of object specialised for storing sequences of things. If you evaluate 'typeof []' it produces "object". You can visualise arrays as long, flat octopuses with all their tentancles in a neat row, labeled with numbers. */

let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "tv"],
    sequirrel: false,
  },
  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  {
    events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true,
  },
  /* And so on... */
];
