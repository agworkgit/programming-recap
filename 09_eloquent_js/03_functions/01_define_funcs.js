let log = console.log;

/* Square number */

const square = function (num) {
  return num * num;
};

log(square(2));
// -> 4

/* Round n to the nearest step */

const roundTo = function (n, step) {
  // remainder = 7
  let remainder = n % step;
  // 57 - 7 + ((7 < 10 / 2) ? 0 : 10)
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

log(roundTo(57, 10));
// -> 60

/* Functions that produce a side effect or return nothing produce 'undefined' */
