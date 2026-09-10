/* Conditional execution, code gets executed only if a certain condition holds true */

// Node prompt
import readline from "node:readline";

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let prompt = userInput.question("What is your number?: ", (num) => {
  // Converts string to number
  num = Number(num);
  // Conditional - unless num is not-a-number, do this
  if (Number.isNaN(num)) {
    // statement block, for single statements can be omitted
    console.log("Hey. Why didn't you give me a number?");
  } else {
    console.log("Your number is the square root of " + num * num);
  }

  // Close interface once the job is finished
  userInput.close();
});
