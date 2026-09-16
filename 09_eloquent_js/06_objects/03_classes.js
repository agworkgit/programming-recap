/* 
CLASSES

To create an instance of a given class, you have to make an object that derives from the proper prototype, but you 'also' have to make sure it itself has the properties that instances of this class are supposed to have. This is what a 'constructor' function does.
*/

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

console.log(makeRabbit("black"));
// -> { type: 'black' }

/* 
JS's class notation makes it easier to define this type of function, along with a prototype object.
*/

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
console.log(killerRabbit);
// -> Rabbit { type: 'killer' }

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// -> true

console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);
// -> true

/* 
PRIVATE PROPERTIES

It is common for classes to define some properties and methods for internal use that are not part of their interface. These are called 'private' properties, as opposed to 'public' ones, which are part of the object's external interface.

To declare a private method, put a # sign in front of its name.
Such methods can be called only from inside the 'class' declaration that defines them.
*/

class SecretiveObject {
  #getSecret() {
    return "I ate all the plums";
  }
  interrogate() {
    let shallISayIt = this.#getSecret();
    return "never";
  }
}

let testObject = new SecretiveObject();
console.log(testObject.interrogate());
// -> 'never'

/* 
When a class doesn't declare a constructor, it will automatically get an empty one.
If you try to call '#getSecret' from outside the class, you get an error.
Its existance is entirely hidden inside the class declaration.

To use private instance properties, you must declare them. Regular properties can be created by just assigning to them, but private properties 'must' be declared in the class declaration to be available at all.

This class implements an appliance for getting a random whole number below a given maximum number. It has only one public property: 'getNumber'.
*/

class RandomSource {
  #max;
  constructor(max) {
    this.#max = max;
  }
  getNumber() {
    return Math.floor(Math.random() * this.#max);
  }
}

/* 
OVERRIDING DERIVED PROPERTIES

When you add a property to an object, whether it is present in the prototype or not, the prototype is added to the object 'itself'. If there was already a property with the same name in the prototype, this property will no longer affect the object, as it is now hidden behind the object's own property.
*/

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// -> small

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// -> long, sharp, and bloody

console.log(new Rabbit("basic").teeth);
// -> small

console.log(Rabbit.prototype.teeth);
// -> small
