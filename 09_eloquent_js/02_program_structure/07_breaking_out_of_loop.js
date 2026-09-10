/* The 'break' statement has the effect of immediately jumping out of the enclosing loop 
Example: Find the first number that is both greater than or equal to 20 and divisible by 7
*/

for (let current = 20; ; current++) {
  if (current % 7 === 0) {
    console.log(current);
    break; // the loop will never stop if 'break' is missing
  }
}

// -> 21

/* The 'continue' statement has the effect of jumping out of the body and resuming the iteration */

for (let current = 0; ; current++) {
  // print even numbers
  if (current % 2 === 0) {
    console.log(current);
    continue;
  }

  // stop/break once the number can be divided by 7!
  if (current % 7 === 0) {
    break;
  }
}

// -> 0
// -> 2
// -> 4
// -> 6
