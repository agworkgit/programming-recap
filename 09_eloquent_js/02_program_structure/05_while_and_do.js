/* Consider a program that has to output all even number from 0 to 12
You could hardcode every line like this (not recommended):
*/

/* 
console.log(0)
console.log(2)
console.log(4)
console.log(6)
console.log(8)
console.log(10)
console.log(12)
*/

/* It works, but the idea is to write a program to make something less work, not more 
We need something to run a piece of code multiple times, a loop
*/

/* Calculating exponent from user inputs with a 'while' loop */

import readline from "node:readline";

let prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("What is the base?: ", (base) => {
  prompt.question("What is the exponent?: ", (exponent) => {
    let result = 1;
    let counter = 0;

    while (counter < exponent) {
      result = result * base;
      counter += 1;
    }
    console.log(`The result is: ${result}`);

    prompt.close();
  });
});

/* Exponents can also be calculated with ** e.g. 2 ** 3 = 8, but it would've ruined the example */

/* 'do' loops are similar, they differ only on one point: a 'do' loop always executes at least once
It will test whether to stop only after the first execution
*/
