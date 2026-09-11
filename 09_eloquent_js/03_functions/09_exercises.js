let log = console.log;

/* Minimum */

// Define the function min that takes two arguments and returns their minimum
let giveMin = (a, b) => (a < b ? a : b);
log(giveMin(5, 3));
// -> 3

/* Recursion */

/* We've seen that we can use % to test whether a number is even or odd by using % 2 to see whether it's divisible by two. Here's another way to define whether a positive whole number is even or odd:
- 0 is even
- 1 is odd
- for n, its even-ness is the same as n - 2
*/

// Define a recursive function isEven corresponding to this description

let isEven = (n) => {
  if (n > -1) {
    if (n === 1) {
      return false;
    } else {
      if (n === 0) {
        return true;
      }
      return isEven(n - 2);
    }
  } else {
    return "please enter a positive whole number";
  }
};

log(isEven(10));
// isEven -> true

log(isEven(3));
// isEven -> false

log(isEven(-1));
import { lstat } from "node:fs";
// isEven -> please enter a positive whole number

/* Bean Counting */

/* You can get the nth char, or letter, from a string by writing [n] after the string (for example, string[2]). The resulting value will be a string containing only one char. The first char has position 0, which causes the last one to be found at position string.length -1. */

// Write a function called countBs that takes a string as its only argument and returns a number of number that indicates how many uppercase B characters there are in the string.

// let countBs = (string) => {
//   let cleanStr = String(string);
//   let i = 0;
//   let bCount = 0;
//   while (i < cleanStr.length) {
//     if (cleanStr[i] === "B") {
//       bCount++;
//     }
//     i++;
//   }
//   return bCount;
// };

// log(countBs("StrawBberrBy"));
// countBs -> 2

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the char that is to be counted (rather than hardcoding to only Bs). Re-write countBs to make use of this new function.

// import readline
import readline from "node:readline";

// create interface
let prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// prompt for string
prompt.question("What is your string? > ", (userStr) => {
  // prompt for letter
  prompt.question("What is your letter? > ", (userLetter) => {
    // count the letters and produce output
    let stringCharCounter = (str, char) => {
      let i = 0;
      let count = 0;
      while (i < str.length) {
        if (str[i] === char) {
          count++;
        }
        i++;
      }
      return `I found ${count} ${char}'s in your string`;
    };

    // log output
    console.log(stringCharCounter(userStr, userLetter));

    // close prompt
    prompt.close();
  });
});
