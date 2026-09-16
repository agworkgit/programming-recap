/* 
PROTOTYPES 

Objects can be linked to other objects, to magically get all the properties that other object has. Plain old objects created with {} notation are linked to an object called 'Object.prototype'.
*/

let empty = {};
console.log(empty.toString);
// -> function toString()...{}
console.log(empty.toString());
// -> [object Object]

/* 
When an object gets a request for a property that it doesn't have, its prototype will be searched for the property. If that doesn't have it, the "prototype's" prototype is searched, and so on until and object without prototype is reached ('Object.prototype' is such an object).
*/

console.log(Object.getPrototypeOf({}) == Object.prototype);
// -> true
console.log(Object.getPrototypeOf(Object.prototype));
// -> null

/* 
Many objects don't directly have 'Object.prototype' as their prototype but instead have another object that provides a different set of default properties. Functions derive from 'Function.prototype' and arrays derive from 'Array.prototype'.
*/

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// -> true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// -> true

/* 
Such a prototype object will itself have a prototype, often 'Object.prototype', so that it still indirectly provides methods like 'toString'.

You can use 'Object.create' to create an object with a specific prototype.
*/

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am fear and darkness");
// -> The black rabbit says 'I am fear and darkness'

/* 
The 'proto' rabbit acts as a container for the properties shared by all rabbits.
An individual rabbit object, like the black rabbit, contains properties that apply only to itself -- in this case its type -- and derives shared properties from its prototype.
*/
