// Duplicated code example as a function

function bark(name, weight) {
  // edge case: weight can't be less than 1!
  if (weight > 1) {
    if (weight > 20) {
      return name + " says WOOF WOOF!";
    } else {
      return name + " says woof woof!";
    }
  } else {
    return "Please provide a valid weight!";
  }
}

console.log(bark("Spot", 21));
console.log(bark("Lady", 6));
console.log(bark("Scottie", 12, 0)); // there is no third parameter, but the call still works!
console.log(bark("Dino", -1, 0)); // the weight is -1! the function does not handle values less than 1! now handled, and we get "Please provide a valid weight!"
