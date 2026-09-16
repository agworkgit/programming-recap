/* EXERCISES */

/* Flattening
- Use the 'reduce' method in combination with the 'concat' method to "flatten" an array of arrays into a single array that has all the elements of the original arrays.
*/

let arrOfArrs = [
  [1, 2, 3],
  ["d", "e", "f"],
  ["four", "five", "six"],
];

// Works with 2D arrays
let flatArr = (arr) => {
  let flat = arr.reduce((current, flat) => {
    return flat.concat(current);
  });
  return flat;
};

console.log(flatArr(arrOfArrs));
// -> ['one', 'two', 'three', 'a', 'b', 'c', 1, 2, 3]

/* Your Own Loop
- Write a higher-order function 'loop' that provides something like a 'for' loop statement.
It should take a value, a test function, an update function, and a body function.
Each iteration, it should first run the test function on the current loop value and stop if that returns 'false'.
It should then call the body function, giving it the current value, and finally call the update function to create a new value and start over from the beginning.
When defining a function, you can use a regular loop to do the actual looping.
*/

function loop(value, test, update, body) {
  for (let current = value; test(current); current = update(current)) {
    body(current);
  }
}

loop(
  // value
  10,
  // test
  (n) => n > 0,
  // update
  (n) => n - 1,
  // body
  console.log,
);

/* Everything
- Arrays also have and 'every' method analogous to the 'some' method. This method returns 'true' when the given function returns 'true' for every element in the array.
In a way, 'some' is a version of the || operator that acts on arrays, and 'every' is like the && operator.
Implement 'every' as a function that takes an array and a predicate function as parameters.
Write two versions, one using a loop and one using the 'some' method.
*/

let testArr = [1, 2, 3, 4, 5];

function someArr(arr, test) {
  return arr.some((index) => test(index));
}

console.log(someArr(testArr, (n) => n == 5));
// -> true

function someArrLoop(arr, test) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    test(arr[i]) ? (result = test(arr[i])) : false;
  }
  return result;
}

console.log(someArrLoop(testArr, (n) => n == 3));
// -> true

let mapper = (array, instructions) => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
};

let arrOfNums = [1, 2, 3, 4, 5];
let squareNums = mapper(arrOfNums, (n) => n * n);
console.log(squareNums);
