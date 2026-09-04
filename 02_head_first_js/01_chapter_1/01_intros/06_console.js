let log = console.log;

const word = "bottles";
let count = 99;

while (count > 0) {
  //   log(count + " " + word + " of root beer on the wall");
  //   log(count + " " + word + " of root beer,");
  log("Take one down, pass it around,");
  count = count - 1;
  if (count > 0) {
    log(count + " " + word + " of root beer on the wall.");
  } else {
    log("No more " + word + " of root beer on the wall.");
  }
}
