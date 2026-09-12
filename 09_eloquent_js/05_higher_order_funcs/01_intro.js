/* 
A large program is a costly program, and not just because of the time it takes to build.
Size almost always involves complexity, and complexity confuses programmers.
Confused programmers, in turn, introduce mistakes (bugs) into programs.
A large program then provides a lot of space for these bugs to hide, making them hard to find.
*/

/* Version 1 */

let total = 0,
  count = 1;

while (count <= 10) {
  total += count;
  count++;
}

console.log(total);

/* Version 2 - relies on two external functions */

console.log(sum(range(1, 10)));

/*
Which one is more likely to contain a bug?
If we count the size of the definitions of 'sum' and 'range', the second version is also big -- even bigger than first.
But still, I'd argue that it is more likely to be correct. This is because the solution is expressed in a vocabulary that corresponds to the problem being solved.
Summing a range of numbers isn't about loops and counters. It is about ranges and sums.
The definition of this vocabulary (the functions 'sum' and 'range') will still involve loops, counters, and other incidental details.
But because they are expressing simpler concepts than the program as a whole, they are easier to get right.
*/
