/* It is not uncommon for code to look like this */

// if (x == "value1") action1();
// else if (x == "value2") action2();
// else defaultAction();

/* But there is a special construct for this specific case, called 'switch' */

import readline from "node:readline";

let prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("What's the weather like?: ", (type) => {
  switch (type) {
    case "rainy":
      console.log("Remember to bring an umbrella and wellies");
      break;
    case "hot":
    case "sunny":
      console.log("Dress lightly");
    case "cloudy":
      console.log("Go outside");
      break;
    case "cold":
    case "snowy":
      console.log("Dress heavy and wear boots");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }

  prompt.close();
});
