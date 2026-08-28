// VARIABLES

let randomLocation = Math.floor(Math.random() * 5);
let location1 = randomLocation;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess; // undefined until guess is made
let hits = 0;
let guesses = 0;
// Bugfix
let previous_guess;

let isSunk = false; // true when ship is sunk

/* 
To do:

- Create loop and get user guess [x]
- Check user guess [x]
- Check if ship has been sunk [x]
- Display stats to user [x]
*/

/* 
Bug:

- Entering the same correct value multiple times sinks the ship
- Each correct value entered must be distinct
*/

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  // prompt is a built-in browser function used to get input from the user
  // checking the user's guess
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
    // checking for hits
    if (guess == location1 || guess == location2 || guess == location3) {
      // Bugfix
      if (guess != previous_guess) {
        alert("HIT!");
        hits = hits + 1;
        previous_guess = guess;
      } else {
        alert("Please guess the next location!");
      }
      // you guessed all 3 locations
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS");
    }
  }
}

let stats =
  "You took " +
  guesses +
  " guesses to sink the battleship, " +
  "which means your shooting accuracy was " +
  (3 / guesses).toFixed(2);
alert(stats);
