/* It's perfectly okay for a func to call itself, as long as it doesn't do it so often that it overflows the call stack. A func that calls itself is called 'recursive' */

function power(base, exponent) {
  // base case
  if (exponent === 0) {
    return 1;
  } else {
    // recursive step
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// -> 8

/* Call stack:
power(2, 3) [8]
exponent is not 0
return 2 * power(2, 2) [2 * 4 = 8]
power(2, 2) [4]
exponent is not 0
return 2 * power(2, 1) [2 * 2 = 4]
power(2, 1) [2]
exponent is not 0
return 2 * power(2, 0) [2 * 1 = 2]
exponent is 0
return 1 [1]

now we roll back to get the result, in square brackets
*/

/* In typical JS running a simple 'loop' is generally cheaper than calling a function multiple times, you need to find the appropriate balance */

/* Approximated log(num,base)
The binary search keeps trying exponents until the base^exponent is close enought to the number
*/

function log(num, base, low = 0, high = num) {
  const mid = (low + high) / 2;
  // Test the midpoint of the current range as our estimate for the exponent

  if (Math.abs(Math.pow(base, mid) - num) < 0.000001) {
    // Stop when raising the base to the estimated exponent is close enough to num
    return mid;
  } else if (Math.pow(base, mid) < num) {
    // If the result is too small, the exponent needs to be larger
    // Recursively search the upper half of the current range
    return log(num, base, mid, high);
  }

  // Otherwise, the exponent is too large
  // Recursively search the lower half of the current range
  return log(num, base, low, mid);
}

console.log(log(10, 2));
// -> 3.321928083896637

/* Puzzle:
By starting at the number 1 and repeatedly either adding 5 or multiplying by 3, and infinite set of numbers can be produced.
How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?
For example the number 13, can be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 can not be reached at all.
*/

function findSolution(target) {
  // Does the recursing
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      // No solution found
      return null;
    } else {
      return (
        // ?? returns right only of left is null/undefined
        find(current + 5, `(${history} + 5)`) ??
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

console.log(findSolution(13));
// -> (((1 * 3) + 5) + 5)

/* Call stack:
find(1, "1")
is 1 === 13? no
is 1 > 13? no
    find(1 + 5, "(1 + 5)")
    is 6 === 13? no
    is 6 > 13? no
        find(6 + 5, "(1 + 5) + 5")
        is 11 === 13? no
        is 11 > 13? no
            find(11 + 5, "((1 + 5) + 5) + 5")
            is 16 === 13? no
            is 16 > 13? yes
            return null
            back to ??
            
            find(11 * 3, "(11 * 3)")
            is 33 === 13? no
            is 33 > 13? yes
            return null
            back to ??

        find((1 + 5) * 3, "(1 + 5) * 3")
        is 18 === 13? no
        is 18 > 13? yes
        return null
        back to ??

    find(1 * 3, "(1 * 3)")
    is current == target? yes
    return history "(1 * 3)"
find((1 * 3) + 5, "(1 * 3) + 5")
is 8 === 13? no
is 8 > 13? no
    find((((1 * 3) + 5) + 5), "(((1 * 3) + 5) + 5)")
    is 13 === 13? yes
    return history (((1 * 3) + 5) + 5)
*/
