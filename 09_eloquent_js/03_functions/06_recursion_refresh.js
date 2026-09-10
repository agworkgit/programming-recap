/* Basic */

function countDown(n) {
  if (n === 0) return;
  console.log(n);
  countDown(n - 1);
}

countDown(3); // 3, 2, 1

/* What happens?
1. countDown(3) calls countDown(2) and waits
    "I need to call countDown(2)
    I'll wait here until it finishes."
2. countDown(2)
    "I need to call countDown(1)
    I'll wait here until it finishes."
3. countDown(1)
    "I need to call countDown(0)
    I'll wait here until it finishes."
4. countDown(0)
    "I'm done"

Moving from the bottom up
3. countDown(1) 
2. countDown(2)
1. countDown(3)

Each function call pauses its 'parent' while it investigates something
*/

/* Exercises */

function addFive(n) {
  if (n > 20) return n;

  return addFive(n + 5);
}

console.log(addFive(5));
// -> 25

/* Call stack:
addFive(20 + 5)
    is 25 > 20 -> yes, return 25
addFive(15 + 5)
    is 20 > 20 -> no
addFive(10 + 5)
    is 15 > 20 -> no
addFive(5 + 5)
    is 10 > 20 -> no
addFive(5)
    is 5 > 20 -> no
*/

function mystery1(n) {
  if (n === 0) {
    return "finished";
  }

  return mystery1(n - 1);
}

console.log(mystery1(3));
// -> finished

/* Call stack:
mystery(0)
is n === 0? yes, returns "finished" and passes the value to the function that called it!
mystery(1)
is n === 0? no
mystery(2)
is n === 0? no
mystery(3)
is n === 0? no
*/

function mystery2(n) {
  if (n === 0) {
    return 10;
  }

  return mystery2(n - 1) + 1;
}

console.log(mystery2(3));
// -> 13

/* Call stack:
- Going down:
    mystery2(3) -> mystery2(2) -> mystery2(1) -> mystery2(0) -> return 10

- Coming back up:
    mystery2(1) = 10 + 1 -> mystery2(2) = 11 + 1 -> mystery2(3) 12 + 1 -> return 13
*/

function mystery3(n) {
  if (n === 0) {
    return 5;
  }

  return mystery3(n - 1) * 2;
}

console.log(mystery3(3));
// -> 20

/* Call stack:
- Going down:
    mystery(3 - 1) * 2 -> mystery(2 - 1) ->  mystery(1 - 1) -> return 5

- Coming back up:
    mystery3(0) = 5 -> mystery3(1) * 2 = 10 -> mystery(2) * 2 = 10 * 2 = 20
*/

function find(current) {
  if (current === 8) {
    return "FOUND";
  }

  if (current > 8) {
    return null;
  }

  return find(current + 5) ?? find(current * 3);
}

console.log(find(1));

/* Call stack:
- Going down:
    find(6) ?? find(3)
        find(6)
            find(11) ?? find(18)
                find(11) -> null ?? find(18) -> null
        find(3)
            find(8) ?? find(9)
                find(8) -> 8 (FOUND)

- Going back up:
    find(6) ?? find(3)
        find(6) -> null ?? find(3) -> "FOUND"
    find(1) -> "FOUND"
    console.log(find(1)) -> "FOUND"
*/

/* Retry */

function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ??
        find(current * 3, `(${history} * 3)`)
      );
    }
  }

  return find(1, "1");
}

console.log(findSolution(13));

/* Call Stack:
    - PAUSE, CALL, RETURN, RESUME
    CALL console.log(findSolution(13))
    CALL findSolution(13)
        CALL find(1, "1")
            is 1 === 13? no
            is 1 > 13? no
            CALL find(1 + 5, `(${history} + 5)`) ?? find(1 * 3, `(${history} * 3)`)
                is 6 === 13? no
                is 6 > 13? no
                CALL find(1 + 5 + 5, `(${history} + 5 + 5)`) ?? find(1 * 3 * 3, `(${history} * 3 * 3)`)
                    is 11 === 13? no
                    is 11 > 13? no
                    CALL find(1 + 5 + 5 + 5, `(${history} + 5 + 5 + 5)`) ?? find(1 * 3 * 3 * 3, `(${history} * 3 * 3 * 3)`)
                        is 16 === 13? no
                        is 16 > 13? yes, RETURN null
*/
