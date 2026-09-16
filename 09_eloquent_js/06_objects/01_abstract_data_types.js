/* ABSTRACT DATA TYPES */

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my fur and whiskers");
// -> The white rabbit says 'Oh my fur and whiskers'
hungryRabbit.speak("Got any carrots?");
// -> The hungry rabbit says 'Got any carrots?'

/* The first argument of 'call' is 'this', the rest of them are treated as regular arguments. */
speak.call(whiteRabbit, "Hungry");
// -> The white rabbit says 'Hungry'

/* Arrow functions are different -- they do not bind their own 'this' but can see the 'this' binding of the scope around them. */

let finder = {
  find(array) {
    return array.some((v) => v == this.value);
  },
  value: 5, // <- 'this' can see 'value'
};

console.log(finder.find([4, 5]));
// -> true
