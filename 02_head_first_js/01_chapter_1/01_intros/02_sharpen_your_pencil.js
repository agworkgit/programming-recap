/* 
Compute the values
*/

let temp = 10;
let celsiusToFahrenheit = (9 / 5) * temp + 32;
//                          1.8 * 10 + 32 = 50

// What is the result when 'temp' is 10? 50

let colour = "pink";
let colourResult = colour == "orange";
console.log(colourResult);

// Is this true or false when the colour has the value "pink"? false
// Or has the value "orange"? true

let name = "Martha";
let string = name + ", " + "you've won!";

// What value does this compute to when the name is "Martha"?
// "Martha, you've won!"

let yourLevel = 2;
let levelComp = yourLevel > 5;

// When yourLevel is 2, what does this evaluate to? false
// When yourLevel is 5, what does this evaluate to? false
// When yourLevel is 7, what does this evaluate to? true

let level = 5;
let points = 30000;
let bonus = 3300;

let score = level * points + bonus;

// What does this evaluate to? 153300

// What does 1000 + "108" evaluate to? "1000108"
// As you can see JS took the 1000 numeric value and coerced it into a string, then concatenated it the "108" string.
