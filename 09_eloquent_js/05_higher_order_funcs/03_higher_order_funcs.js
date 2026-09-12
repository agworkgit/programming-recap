function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

/* 
Functions that operate on other functions, either by taking them as arguments or by returning them, are called 'higher-order functions'.
Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist.
The term comes from mathematics, where the distinction between functions and other values is taken more seriously.
Higher-order functions allow us to abstract over 'actions', not just values. They come in serveral forms.
For example, we can have functions that create new functions.
*/

function greaterThan(n) {
  return (m) => m > n;
}

let greaterThan10 = greaterThan(10); // -> provides n
console.log(greaterThan10(11)); // -> provides m
// -> (m) => m > n returns true

/* 
We can also have functions that change other functions.
*/

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    // f is Math.min
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);
// -> calling with [3,2,1]
// -> called with [3,2,1], returned 1

/* 
We can even write functions that provide new types of control flow.
*/

function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// -> 0 is even
// -> 2 is even

/* 
There is a built-in array method, 'forEach', that provides something like a 'for...of loop' as a higher-order function.
*/

["A", "B"].forEach((i) => console.log(i));
// -> A
// -> B
