/* 
One area where higher-order functions shine is data processing.
To process data, we'll need some actual example data.
This chapter will use a dataset about scripts -- writing systems such as Latin, Cyrillic, or Arabic.

Remember Unicode, the system that assigns a number to each character in written language, from Chapter 1?
Most of these characters are associated with a specific script. The standard contains 140 different scripts, of which 81 are still in use today and 59 are historic.
Though I can fluently read only Latin characters, I appreciate the fact that people are writing texts in at least 80 other writing systems, many of which I wouldn't even recognise.

The example dataset contains some pieces of information about the 140 scripts defined in Unicode.
The binding contains an array of objects, each of which describes a script.
*/

import data from "./data/scripts.json" with { type: "json" };

/* 
Such an object tells us the name of the script, the Unicode ranges assigned to it, the direction in which it is written, the approximate origin time, whether it is still in use, and a link to more information.
The direction may be 'ltr' for left to right, 'rtl' for right to left (the way Arabic and Hebrew texts are written), or 'ttb' for top to bottom (as with Mongolian writing).

The 'ranges' property contains an array of Unicode character ranges, each of which is a two-element array containing a lower bound and an upper bound. Any character codes within these ranges are assigned to the script. The lower bound is inclusive (code 994 is a Coptic character) and the upper bound is non-inclusive (code 1008 isn't).
*/

/* 
FILTERING ARRAYS 

If we want to find the scripts in the dataset that are still in use, the following function might be helpful.
It filters out elements in an array that don't pass a test.
*/

function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

// console.log(filter(data, (script) => script.living));

/* 
The function uses the argument named 'test', a function value, to fill a 'gap' in the computation -- the process of deciding which elements to collect.
Note how the 'filter' function, rather than deleting elements from the existing array, builds up a new array with only the elements that pass the test. This function is 'pure'. It does not modify the array it is given.

Like 'forEach', 'filter' is a standard array method. The example defined the function only to show what it does internally. From now on, we'll use it like this instead:
*/

// console.log(data.filter((s) => s.direction == "ttb"));

/* 
TRANSFORMING WITH MAP

Say we have an array of objects representing scripts, produced by filtering the 'data' array somehow. We want an array of names instead, which is easier to inspect.

The 'map' method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been 'mapped' to a new form by the function.
*/

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = data.filter((s) => s.direction == "rtl");
console.log(map(rtlScripts, (s) => s.name));

/* 
Like 'forEach' and 'filter', 'map' is a standard array method.
*/

/* 
SUMMARISING WITH REDUCE

Another common thing to do with arrays is to compute a single value from them.
Our recurring example, summing a collection of numbers, is an instance of this.
Another example is finding the script with the most characters.

The high-order operation that represents this pattern is called 'reduce' (sometimes also called 'fold').
It builds a value by repeatedly taking a single element from the array and combining it with the current value.
This function is a little less straight-forward than 'filter' and 'map', so observe it closely:
*/

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// -> 10

/* Trace:
CALL reduce([1, 2, 3, 4], (a, b) => a + b, 0))
    -> let current = 0
    -> for (let element of [1, 2, 3, 4])
        -> current = (current, element) => current + element
    -> return current, which is 1 on first iteration, 3 on second iteration, and so on...
*/

/* 
The standard array method 'reduce', which of course corresponds to this function, has an added convenience.
If your array contains at least one element, you are allowed to leave off the 'start' argument.
The method will take the first element of the array as its start value and start reducing at the second element.
*/

console.log([1, 2, 3, 4].reduce((start, current) => start + current));
// -> 10

/* 
To use 'reduce' (twice) to find the script with the most characters, we can write something like this:
*/

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from); // iterate on the current count + the difference between the two ranges
  }, 0);
}

console.log(
  data.reduce((start, current) => {
    return characterCount(start) < characterCount(current) ? current : start;
  }),
);
// -> {name: "Han", ...}

/* 
The 'characterCount' function reduces the ranges assigned to a script by summing their sizes.
Note the use of destructuring in the parameter list of the reducer function. The second call to 'reduce' then uses this to find the largest script by repeatedly comparing two scripts and returning the larger one.

The "Han" script has more than 89,000 characters assigned to it in the Unicode standard, making it by far the biggest writing system in the dataset. "Han" is a script sometimes used for Chinese, Japanese, and Korean text.
Those languages share a lot of characters, though they tend to write them differently.

The (US-based) Unicode Consortium decided to treat them as a single writing system to save character codes.
This is called "Han unification" and still makes some people very angry.
*/

/* 
COMPOSABILITY

Consider how we would have written the previous example (finding the biggest script) without higher-order functions.
The code is not that much worse.
*/

let biggest = null;
for (let script of data) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}

console.log(biggest);
// -> {name: "Han", ...}

/* 
There are a few more bindings, and the program is four lines longer, but it is still very readable.
The abstractions that these functions provide really shine when you need to 'compose' operations.
As an example, let's write code that finds the average year of origin for living and dead scripts in the dataset.
*/

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(average(data.filter((s) => s.living).map((s) => s.year))),
);
// -> 1165

console.log(
  Math.round(average(data.filter((s) => !s.living).map((s) => s.year))),
);
// -> 204

/* 
As you can see, the dead scripts in Unicode are, on average, older than the living ones.
This is not a terribly meaningful or surprising statistic.
But I hope you'll agree that the code used to compute it isn't hard to read.
You can see it as a pipeline: we start with all scripts, filter out the living (or dead) ones, take the years from those, average them, and round the result.
You can definitely also write this computation as one big loop.
*/

let total = 0,
  count = 0;

for (let script of data) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}

console.log(Math.round(total / count));
// -> 1165

/* 
However, it is harder to see what was being computed and how. And because itermediate results aren't represented as coherent values, it'd be a lot more work to extract something like 'average' into a separate function.

In terms of what the computer is actually doing, these two approaches are also quite different.
The first will build up new arrays when running 'filter' and 'map', whereas the second computes only some numbers, doing less work.
You can usually afford the readable approach, but if you're processing huge arrays and doing so many times, the less abstract style might be worth the extra speed.
*/

/* 
STRINGS AND CHARACTER CODES

One interesting use of this data set would be figuring out what script a piece of text is using.
Let's go through a program that does this.
Remember that each script has an array of character code ranges associated with it.
Given a character code, we could use a function like this to find the corresponding script (if any):
*/

function characterScript(code) {
  for (let script of data) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(121));
// -> {name: "Latin", ...}

/* 
The 'some' method is another higher-order function. It takes a test function and tells you whether that function returns true for any of the elements in the array.
*/

/* 
But how do we get the character codes in a string?
In Chapter 1 I mentioned that JS strings are encoded as a sequence of 16-bit numbers. These are called 'code units'.
A Unicode character was initially supposed to fit within such a unit (which gives you a little over 65,000 characters).
When it became clear that wasn't going to be enough, many people resisted the need to use more memory per character.

To address these concerns, UTF-16, the format also used by JS strings, was invented.
It describes most common characters using a single 16-bit code unit but uses a pair of two such units for others.
UTF-16 is generally considered a bad idea today. It seems almost intentionally designed to invite mistakes.
It's easy to write programs that pretend code units and characters are the same thing.
And if your language doesn't use two-unit characters, that will appear to work just fine.

But as soon as someone tries to use such a program with some less common Chinese characters, it breaks.
Fortunately, with the advent of emoji, everybody has started using two-unit characters, and the burden of dealing with such problems is more fairly distributed.

Unfortunately, obvious operations on JS strings, such as getting their length through the 'length' property and accesing their content using square brackets, deal only with code units.
*/

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// -> 4
console.log(horseShoe[0]);
// -> (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// -> 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// -> 128052 (Actual code for horse emoji)
