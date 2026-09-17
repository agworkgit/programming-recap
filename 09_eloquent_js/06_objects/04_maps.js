/* 
MAPS

A 'map' is also a term used to describe a data structure that associates values (the keys) with other values.
For example, you might want to map names to ages.
*/

let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62,
};

console.log(`Julia is ${ages.Julia}`);
// -> Julia is 62
console.log(`Is Jack's age known? ${"Jack" in ages}`);
// -> Is Jack's age known? false
console.log(`Is toString's age known? ${"toString" in ages}`);
// -> Is toString's age known? true

/* 
The safer way to create maps from objects is to pass 'null' to 'Object.create', the resulting object will not derive from 'Object.prototype' and can safely be used as a map.
*/

let safeMap = Object.create(null);
console.log("toString" in safeMap);
// -> false
safeMap.speak = function () {
  console.log(`I can speak`);
};
console.log("speak" in safeMap);
// -> true

/* 
Object property names must be strings.
If you need a map whose keys can't easily be converted to strings -- such as objects -- you cannot use an object as your map.

Fortunately, JS comes with a class called 'Map' that is written for this exact purpose.
It stores a mapping and allows any type of keys.
*/

let mapAges = new Map();
mapAges.set("Boris", 39);
mapAges.set("Liang", 22);
mapAges.set("Julia", 62);

console.log(`Julia's age is ${mapAges.get("Julia")}`);
// -> Julia's age is 62
console.log(`Is Jack's age known? ${mapAges.has("Jack")}`);
// -> Is Jack's age known? false

/* 
The methods 'set', 'get', and 'has' are part of the interface of the 'Map' object.
Writing a data structure that can quickly update and search a large set of values isn't easy, but we don't have to worry about that. Someone else did it for us, and we can go through this simple interface to use their work.
*/

/* 
If you do have a plain object that you need to treat as a map for some reason, it is useful to know that 'Object.keys' returns only an object's 'own' keys, not those in the prototype.
As an alternative to the 'in' operator, you can use the 'Object.hasOwn' function, which ignores the object's prototypes.
*/

console.log(Object.hasOwn({ x: 1 }, "x"));
// -> true
console.log(Object.hasOwn({ x: 1 }, "toString"));
// -> false
