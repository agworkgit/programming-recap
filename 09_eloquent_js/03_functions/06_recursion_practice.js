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

/* Call stack:
find(1, "1")
│
│ +5
▼
find(6, "(1 + 5)")
│
│ +5
▼
find(11, "((1 + 5) + 5)")
│
│ +5
▼
find(16, "(((1 + 5) + 5) + 5)")
│
│ 16 > 13
▼
RETURN null
│
└── find(11) resumes
    │
    │ +5 failed → try ×3
    ▼
    find(33, "(((1 + 5) + 5) * 3)")
    │
    │ 33 > 13
    ▼
    RETURN null
    │
    └── find(11) → RETURN null
         │
         └── find(6) resumes
             │
             │ +5 route failed → try ×3
             ▼
             find(18, "((1 + 5) * 3)")
             │
             │ 18 > 13
             ▼
             RETURN null
             │
             └── find(6) → RETURN null
                  │
                  └── find(1) resumes
                      │
                      │ +5 route failed → try ×3
                      ▼
                      find(3, "(1 * 3)")
                      │
                      │ +5
                      ▼
                      find(8, "((1 * 3) + 5)")
                      │
                      │ +5
                      ▼
                      find(13, "(((1 * 3) + 5) + 5)")
                      │
                      │ 13 === 13
                      ▼
                      RETURN "(((1 * 3) + 5) + 5)"
*/

/* Practice */

function mystery4(n) {
  if (n === 0) {
    return 10;
  }

  return mystery4(n - 1) + 2;
}

console.log(mystery4(3));

/* Trace:
console.log(mystery4(3)) -> 16
down -> mystery4(3) / up -> 14 + 2 = 16
  down -> mystery4(2) + 2 / up -> 12 + 2
    down -> mystery4(1) + 2 / up -> 10 + 2
      down -> mystery4(0) + 2 -> base case hit, return 10 / up -> 10
*/

function mystery5(n) {
  if (n === 0) {
    return 3;
  }

  return mystery5(n - 1) * 2;
}

console.log(mystery5(3));

/* Trace:
console.log(mystery5(3))
  print 24 (done)
    mystery5(3)
      wait for mystery5(2) * 2 (down)
      return 12 * 2 (up)
        mystery5(2)
          wait for mystery5(1) * 2 (down)
          return 6 * 2 (up)
            mystery5(1)
              wait for mystery5(0) * 2 (down)
              return 3 * 2 (up)
                mystery5(0)
                  return 3
*/

/* More Practice */

function find(n) {
  if (n === 7) {
    return "FOUND";
  }

  if (n > 7) {
    return null;
  }

  return find(n + 4) ?? find(n * 2);
}

console.log(find(1));

/* Trace:
FIRST console.log(find(1))
  CALL find(1) -> find(1 + 4) ?? find(1 * 2)
    CALL find(1 + 4)  -> find((1 + 4) + 4) -> null ?? find((1 + 4) * 2) -> null
    CALL find(1 * 2) -> find((1 * 2) + 4) ?? find((1 * 2) * 2)
      CALL find((1 * 2) + 4) -> find(((1 * 2) + 4) + 4) -> null ?? find(((1 * 2) + 4) * 2) -> null
    CALL find((1 * 2) * 2), is 4 === 7? NO, is 4 > 7? NO, find((1 * 2) * 2) + 4) ?? find((1 * 2) * 2) * 2)
      CALL find((1 * 2) * 2) + 4), is 8 === 7? NO, is 8 > 7? YES, RETURN null
      CALL find((1 * 2) * 2) * 2), is 16 === 7? NO, is 16 > 7? YES, RETURN null
    CALL find((1 * 2) * 2), null ?? null, RETURN null
  CALL find(1) -> null
*/

/* More Practice */

function find(n) {
  if (n === 6) {
    return "FOUND";
  }

  if (n > 6) {
    return null;
  }

  return find(n + 3) ?? find(n * 2);
}

console.log(find(1));

/* Trace:
CALL console.log(find(1))
  CALL find(1) -> is 1 === 6? NO, is 1 > 6? NO, RETURN find(1 + 3) ?? find(1 * 2);
    TRY find(1 + 3) -> is 4 === 6? NO, is 4 > 6? NO, RETURN find(6 + 3) ?? find(6 * 2);
      CALL find(6 + 3) -> is 9 === 6? NO, is 9 > 6? YES, RETURN null
      CALL find(6 * 2) -> is 12 === 6? NO, is 12 > 6? YES, RETURN null
    RESUME find(1 + 3) -> is 4 === 6? NO, is 4 > 6? NO, RETURN null ?? null;
    
    TRY find(1 * 2) -> is 2 === 6? NO, is 2 > 6? NO, RETURN find(2 + 3) ?? find(2 * 2);
      CALL find(2 + 3) -> is 5 === 6? NO, is 5 > 6? NO, RETURN find(5 + 3) ?? find(5 * 2);
        CALL find(5 + 3) -> is 8 === 6? NO, is 8 > 6? YES, RETURN null
        CALL find(5 * 2) -> is 10 === 6? NO, is 10 > 6? YES, RETURN null
      RESUME find(2 + 3) -> RETURN null ?? null;

      CALL find(2 * 2) -> is 4 === 6? NO, is 4 > 6? NO, RETURN find(4 + 3) ?? find(4 * 2);
        CALL find(4 + 3) -> RETURNS null
        CALL find(4 * 2) -> RETURNS null
      RESUME find(2 * 2) -> RETURN null ?? null;
  
  RESUME find(1) -> RETURN null ?? null;
*/
