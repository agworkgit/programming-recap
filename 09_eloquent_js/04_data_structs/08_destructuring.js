/* Let's return to the 'phi' function for a moment. */

// function phi(table) {
//   return (
//     (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt(
//       (table[2] + table[3]) *
//         (table[0] + table[1]) *
//         (table[1] + table[3]) *
//         (table[0] + table[2]),
//     )
//   );
// }

/* One reason this function is awkward to read is that we have a binding pointing at our array, but we'd much perefer to have bindings for the 'elements' of the array -- that is, 'let n00 = table[0]' and so on. Fortunately, there is a succinct way to do this in JS: */

function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
  );
}

console.log(phi([76, 9, 4, 1]));
// -> 0.06859943405700354

/* This also works for bindings created with 'let', 'var', or 'const'. If you know that the value are binding is in an array, you can use square brackets to "look inside" of the value, binding its contents. A similar trick works for objects, using braces instead of square brackets. */

let { name } = { name: "Faraji", age: 23 };
console.log(name);
// -> Faraji

/* Note that if you try to destructure 'null' or 'undefined', you get an error, much as you would if you directly try to access a property of those values. */
