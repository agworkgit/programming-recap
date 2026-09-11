/* There are two more or less natural ways for funcs to be introduced into programs. 

The first occurs when you find yourself writing similar code multiple times. 

The second way is that you find you need some functionality that you haven't written yet and that sounds like it deserves its own function. */

// function printFarmInventory(cows, chickens) {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = "0" + cowString;
//     // cowString = 7
//     // 1 < 3 -> cowString = 07
//     // 2 < 3 -> cowString =  0 + 07 = 007
//   }
//   console.log(`${cowString} Cows`);

//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//     // chickenString = 11
//     // 2 < 3 -> chickenString = 0 + 11 = 011
//   }
//   console.log(`${chickenString} Chickens`);
// }

// printFarmInventory(7, 11);
// -> 007 Cows
// -> 011 Chickens

/* Let's say we are tasked to add more animal types? How should we go about it? */

// function printZeroPaddedWithLabel(number, label) {
//   let numberString = String(number);
//   while (numberString.length < 3) {
//     numberString = "0" + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// }

// function printFarmInventory(cows, chickens, pigs) {
//   printZeroPaddedWithLabel(cows, "Cows");
//   printZeroPaddedWithLabel(chickens, "Chickens");
//   printZeroPaddedWithLabel(pigs, "pigs");
// }

// printFarmInventory(7, 11, 3);

/* It works, but the names are a little awkward. It conflates three things, printing, padding, and adding a label into a single function. Instead of lifting out the repeated part of our program wholesale, let's try to pick out a single concept: */

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);

/* A function with a nice, obvious name, like zeroPad makes it easier for someone who reads the code to figure out what it does. Such a function is also useful in more situations than just this specific program. For example, you can use it to print nicely aligned tables of numbers. */

/* How smart and versatile should our function be? A useful principle is to refrain from adding cleverness unless you are absolutely sure you're going to need it. */
