/* 
POLYMORPHISM

When you call the 'String' function (which coverts a value to a string) on an object, it will call the 'toString' method on that object to try to create a meaninful string from it.
Some of the standard prototypes define their own version of 'toString' so they can create a string that contains more useful information than "[object Object]". You can also do that yourself.
*/

// Dependency

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");

// Example

Rabbit.prototype.toString = function () {
  // Specifies exactly the format in which the property is printed
  // This applies only when printing this object!
  return `a ${this.type} rabbit`;
};

console.log(String(killerRabbit));
// -> a killer rabbit
// Different object gives a different format
console.log(String([1, 2, 3]));
// -> 1, 2, 3

/* 
This is a simple instance of a powerful idea. When a piece of code is written to work with objects that have a certain interface -- in this case, a 'toString' method -- any kind of object that happens to support this interface can be plugged into the code and will be able to work with it.

This technique is called 'polymorphism'.
Polymorphic code can work with values of different shapes, as long as they support the interface it expects.

An example of a widely used interface is that of array-like objects that have a 'length' property holding a number and numbered properties for each of their elements. Both arrays and strings support this interface, as do various other objects.
*/

Array.prototype.forEach.call({ length: 2, 0: "A", 1: "B" }, (elt) =>
  console.log(elt),
);
// -> A
// -> B
