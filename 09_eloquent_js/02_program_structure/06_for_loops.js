/* A shorter syntax for the 'while' loop that tracks a counter, the 'for loop' */

for (let num = 0; num <= 12; num += 2) {
  console.log(num); // prints all even nums between 0-12
}

/* The only change here is that all the statements that are related to the 'state' of the loop are grouped together after 'for' 
Syntax: for (initialiser (a variable); check (a boolean); update (an operation for each iteration))
*/

let result = 1;
let base = 2;

for (let counter = 0; counter < 10; counter++) {
  result = result * base;
}

console.log(result);
// -> 1024
