/* 
CLOSURES, SCOPE & EXEC CONTEXT

CLOSURE

- When our function gets called, we create a live store of data (local memory / variable environment / state) for that function's execution context.
- When the function finishes executing, its local memory is deleted (except the returned value).
- But what if our functions could hold on to live data/state between executions? This would let our function definitions have an associated cache/persistent memory.
*/

function instructionGenerator() {
  function multBy2(num) {
    return num * 2;
  }
  return multBy2;
}

// Returns multBy2
const generatedFunc = instructionGenerator();
// Gives it a value
const result = generatedFunc(5);
console.log(result);
// -> 10

/* 
Calling a function in the same scope as it was defined
*/

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    return counter;
  }
  return incrementCounter;
}

/* 
'Where' you define your functions determines what variables your function has access to when you call the function.
*/

/* 
Along with the function definition, we also pull along the Persistent Lexical Scope Reference (PLSR/Closure) 
*/

// counter = 0 -> (new instance of the function definition with PLSR)
const myNewFunc = outer();
console.log(myNewFunc()); // counter = 1
console.log(myNewFunc()); // counter = 2

// counter = 0 -> (new instance of the function definition with PLSR)
const anotherNewFunc = outer();
console.log(anotherNewFunc()); // counter = 1
console.log(anotherNewFunc()); // counter = 2

/* 
The power of Closure

- Our functions get 'memories' - once (limit calls to only one), memoize (cache computations)
- Advanced: we can implement the module pattern in JS
*/

/* 
OOP 

An enormously popular paradigm for structuring complex code.
- Easy to add features and functionality
- Performant (efficient in terms of memory)
- Easy for us and other devs to reason about (a clear structure)
*/

/* 
Objects - store functions (methods) with their associated data (properties).
*/

const user1 = {
  name: "Bob",
  score: 3,
  increment: function () {
    user1.score++;
  },
};

user1.increment();
// user.score -> 4

/* 
This is the principle of 'encapsulation'.
*/

/* 
EXAMPLES:

1. Generating objects using functions.
*/

function userCreator(name, score) {
  const newUser = Object.create(null);
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

let user2 = userCreator("Bob", 2);
console.log(user2);
// -> { name: 'Bob', score: 2, increment: [Function (anonymous)] }
user2.increment();
console.log(user2.score);
// -> 3

/* 
Problems with this:
- Each time we create a new user we make space in our computer's memory for all our data and functions.
But our functions are just copies. Is there a better way?

Benefits:
- It's a simple solution, is it the most efficient in practice? Clearly not!

2. Store functions in just one shared object and have the interpreter look up to that object to check if a function is there.
- This type of feature is provided by the JS prototype chain.
*/

function userGen(name, score) {
  const newUsr = Object.create(functionStore);
  // bonds functionStore as the new 'empty' object's prototype (__proto__: functionStore)
  newUsr.name = name;
  newUsr.score = score;
  return newUsr;
}

const functionStore = {
  increment: function () {
    // 'this' is always bound to the object that got created by running userGen
    this.score++;
  },
  login: function () {
    return `You're logged in ${this.name}!`;
  },
};

const genUsr1 = userGen("Tom", 1);
genUsr1.increment();
console.log(genUsr1.score);
// -> 2
console.log(genUsr1.login());
// -> You're logged in Tom!
console.log(Object.getPrototypeOf(genUsr1));
// -> { increment: [Function: increment], login: [Function: login] }
console.log(genUsr1.__proto__);
// -> { increment: [Function: increment], login: [Function: login] }

/* 
Problem:
- No problems, we now have a more generalised efficient solution.

3. Introducing the keyword that automates the hard work: 'new'
*/

const genUsr2 = new userGen("Phil", 3);

/* 
When we call the constructor function with 'new' in front, we automate 2 things:
- Create a new user object
- Return the new user object

But now we need to adjust how we write the body of userGen - how can we:
- Refer to the auto-created object?
- Know where to put our single copies of functions?
*/
