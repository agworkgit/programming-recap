// Making lots of decisions about something

let log = console.log;
let scoops = 5;

if (scoops >= 5) {
  log("Eat faster, the ice cream is going to melt!");
} else if (scoops == 3) {
  log("Ice cream is running low!");
} else if (scoops == 2) {
  log("Going once!");
} else if (scoops == 1) {
  log("Going twice!");
} else if (scoops == 0) {
  log("Gone!");
} else {
  log("Still lots of ice cream left, come and get it.");
}
