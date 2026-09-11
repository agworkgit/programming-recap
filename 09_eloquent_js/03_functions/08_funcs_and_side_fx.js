/* Functions can be roughly devided into those that are called for their side fx and those that are called for their return value (though it is also possible to have a function that does both). */

/* Generally, functions that create values are easier to combine in new ways than functions that directly perform side effects. */

/* A 'pure' function is a specific kind of value-producing function that not only has no side effects but also doesn't rely on side effects from other code -- for example, it doesn't read global bindings whose value might change. A 'pure' function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn't do anything else). */

/* Example, pure func = inputs -> ouput, nothing else is affected */

function add(a, b) {
  return a + b;
}

/* Summary */

// Define f to hold a function value
const f = function (a) {
  return a + 2;
};

// Declare g to be a func
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = (a) => a % 3;

/* 
- A key part of understanding functions is understanding scopes. 
- Each block creates a new scope. 
- Parameters and bindings declared in a given scope are local and not visible from the outside. - Bindings declared with 'var' behave differently -- they end up in the nearest function scope or the global scope. 
- Separating the tasks your program performs into different functions is helpful. You won't have to repeat yourself as much, and functions can help organise a program by grouping code into pieces that do specific things.
*/
