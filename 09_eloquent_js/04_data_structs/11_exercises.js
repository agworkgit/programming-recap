/* 
THE SUM OF A RANGE 

Write a 'range' function that takes two arguments, 'start' and 'end', and returns an array containing all the numbers from 'start' up to and including 'end'. (DONE)

Next, write a 'sum' function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55. (DONE)

As a bonus assignment, modify your 'range' function to take an optional third argument that indicates the 'step' value used when building the array. If no step is given, the elements should go up by increments of one, correspondong to the old behaviour. The function call 'range(1,10,2)' should return [1,3,5,7,9].
Make sure this also works with negative step values so that 'range(5,2,-1)' produces [5,4,3,2]
(DONE)
*/

function range(start, end, step = 1) {
  let result = [];
  let content = Number(start);
  if (step < 0) {
    // if the step is negative
    while (content != end - 1) {
      result.push(content);
      content = content + step;
    }
  } else {
    // if the step is positive
    while (result.length < end) {
      result.push(content);
      content = content + step;
    }
  }
  return result;
}

function sum(arr) {
  let result = 0;
  let index = 0;
  while (index < arr.length) {
    result += arr[index];
    index += 1;
  }
  return result;
}

// start, end, step
console.log(sum(range(1, 10)));
// -> 55
console.log(sum(range(1, 10, 2)));
// -> 100
console.log(sum(range(5, 2, -1)));
// -> 14

/* 
REVERSING AN ARRAY

Arrays have a 'reverse' method that changes the array by inverting the order in which its elements appear. For this exercise, write two funcitons, 'reverseArray' and 'reverseArrayInPlace'. 

The first, 'reverseArray', should take an array as its argument and produce a 'new' array that has the same elements in the inverse order. (DONE)

The second, 'reverseArrayInPlace' should do what the 'reverse' method does 'modify' the array given as its argument by reversing its elements. Neither may use the standard 'reverse' method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Pure functions. Which one runs faster? Pure functions.
*/

function reverseArray(arr) {
  let result = [];
  let index = arr.length - 1;
  while (result.length < arr.length) {
    result.push(arr[index]);
    index -= 1;
  }
  return result;
}

console.log(reverseArray(range(1, 10)));
// -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let originalArr = range(1, 5);

function reverseArrayInPlace(arr) {
  let len = arr.length - 1;
  let result = [];
  while (len >= 0) {
    result.push(arr[len]);
    len--;
  }
  arr = [...result];
  return arr;
}

console.log(originalArr);
// -> [ 1, 2, 3, 4, 5 ]
console.log(reverseArrayInPlace(originalArr));
// -> [ 5, 4, 3, 2, 1 ]

/* 
A LIST

As generic blobs of values, objects can be used to build all sorts of data structures.
A common data structure is the 'list' (not to be confused with arrays).
A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on:

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

The resulting objects form a chain.

A nice thing about lists is that they can share parts of their structure.
For example, if I created two new values {value: 0, rest: list} and {value: -1, rest: list} (with 'list' referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function 'arrayToList' that builds up a list structure like the one shown when given [1,2,3] as argument.

Also write a 'listToArray' function that produces an array from a list.
*/

function arrayToList(arr) {
  let list = {};

  if (arr.length === 0) {
    return null;
  } else {
    list.value = arr[0];
    list.rest = arrayToList(arr.slice(1));
  }

  return list;
}

/* Trace:
arrayToList([1,2,3])
    -> is arr.len === 0? NO
    -> list.value: 1
    -> list.rest: arrayToList(arr.slice(1))
                  -> is arr.len === 0? NO
                  -> list.value: 2
                  -> list.rest: arrayToList(arr.slice(1))
                                -> is arr.len === 0? NO
                                -> list.value: 3
                                -> list.rest: arrayToList(arr.slice(1)) -> return null
                  -> list.value: 2
                  -> list.rest: list.value = 3, list.rest = null
    -> list.value: 1
    -> list.rest: list.value 2, list.rest: list.value: 3, list.rest = null
return list { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
*/

// console.log(arrayToList([1, 2, 3, 4, 5]));

let listToConvert = arrayToList([1, 2, 3]);
console.log(listToConvert);
// -> { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

function listToArray(list, arr = []) {
  if (list === null) {
    //
  } else {
    arr.push(list.value);
    listToArray(list.rest, arr);
  }

  return arr;
}

console.log(listToArray(listToConvert));
// -> [ 1, 2, 3 ]

/* Trace: 
listToArray(1 -> 2 -> 3 -> null, [])
    list === null? NO
    push 1
    arr -> [1]
    CALL listToArray(2 -> 3 -> null, [1])
        list === null? NO
        push 2
        arr -> [1, 2]
        CALL listToArray(3 -> null, [1, 2])
            list === null? NO
            push 3
            arr -> [1, 2, 3]
            CALL listToArray(null, [1, 2, 3])
                list === null? YES
                RETURN [1, 2, 3]
RETURN [1, 2, 3]
*/

/* 
Add the helper functions 'prepend', which takes an element and a list and creates a new list that adds the element to the front of the input list, and 'nth', which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or 'undefined' when there is no such element.

If you haven't already, also write a recursive version of 'nth'.
*/

function prepend(element, list) {
  return Object.assign({ value: element, rest: list });
}

console.log(prepend(5, arrayToList([1, 2, 3])));

function nth(list, index) {
  if (list === null) {
    return undefined;
  }

  if (index === 0) {
    return list.value;
  }

  return nth(list.rest, index - 1);
}

console.log(nth(arrayToList([1, 2, 3]), 1));
// -> 2

/* Trace:
nth(1 -> 2 -> 3 -> null, 1)
│
├─ list === null? NO
├─ index === 0? NO
└─ nth(2 -> 3 -> null, 0)
   │
   ├─ list === null? NO
   ├─ index === 0? YES
   └─ return 2
*/
