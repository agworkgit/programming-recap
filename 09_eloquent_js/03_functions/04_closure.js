/* The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question: "What happens to local bindings when the function call that created them is no longer active?" */

function warpValue(n) {
  let local = n;
  return () => local;
}

let warp1 = warpValue(1);
let warp2 = warpValue(2);

console.log(warp1());
// -> 1
console.log(warp2());
// -> 2

function divider(factor) {
  return (number) => number / factor;
}

let halve = divider(2);
// -> (number) => number / 2
console.log(halve(10));
// -> (10) => 10 / 2
// -> 5

function multiplier(factor) {
  return (number) => number * factor;
}

let double = multiplier(2);
console.log(double(3));
// -> 6
