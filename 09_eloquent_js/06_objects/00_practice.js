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
Generating objects using functions.
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
