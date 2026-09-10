/* Write a loop that outputs the following triangle:

#
##
###
####
#####
######
#######
*/

let drawTriangle = function (size) {
  let char = "#";

  for (let i = 0; i < size; i++) {
    console.log(char);
    char += `#`;
  }
};

drawTriangle(7);

/* Write a program to print all the numbers from 1 to 100, with two exceptions:
- For numbers divisible by 3, print "Fizz"
- For numbers divisible by 5 (and not 3) print "Buzz"
- For numbers divisible by both print "FizzBuzz"
*/

let fizzBuzz = function (nums) {
  for (let i = 1; i < nums; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "FizzBuzz");
    } else {
      if (i % 3 === 0) console.log(i, "Fizz");
      if (i % 5 === 0) console.log(i, "Buzz");
    }
  }
};

fizzBuzz(100);

/* Write a program that creates a string that represents and 8x8 grid, using newline to separate characters. At each position of the grid there is either a space or a # character. The characters should form a chessboard. */

let chessBoard = function (size) {
  // on each iteration of x ' # # # #', '#' on even
  // on each iteration of y '# # # # ' ' ' on even
  // after every 8 chars on x insert newline

  let string = "";

  for (let x = 0; x < size; x++) {
    string.length % 2 == 1 ? (string += "#") : (string += " ");
    for (let y = 0; y < size; y++) {
      if (y % (size + 1) == 0) {
        string += "\n";
      } else {
        if (string.length % 2 == 1) {
          string += "#";
        } else {
          string += " ";
        }
      }
    }
  }

  console.log(string);
};

chessBoard(8);
