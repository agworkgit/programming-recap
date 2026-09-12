/* 
In the context of programming, these kinds of vocabularies are usually called 'abstractions'.
Abstractions can give us the ability to talk about problems at a higher (or more abstract) level, without getting sidetracked by uninteresting details.
It is a useful skill, in programming, to notice when you are working at too low a level of abstraction.
*/

/* 
ABSTRACTING REPETITION 

Plain functions, as we've seen them so far, are a good way to build abstractions. But sometimes they fall short.
It is common for a program to do something a given number of times.
You can write a 'for loop' for that, like this:
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
Can we abstract 'doing something n times' as a function? Well, it's easy to write a function that calls 'console.log' n times.
*/

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

/* 
But what if we want to do something other than logging the numbers?
Since 'doing something' can be represented as a function and functions are just values, we can pass our action as a function value.
*/

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// -> 0
// -> 1
// -> 2

/* 
We don't have to pass a predifined function to 'repeat'. Often, it is easier to create a function value on the spot instead.
*/

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);
// -> ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

/* 
This is structured a little like a 'for loop' -- it first describes the kind of loop and then provides the body.
However, the body is not written as a function value, which is wrapped in the parentheses of the call to 'repeat'.
This is why it has to be closed with the closing brace and closing parenthesis.
In cases like this example, the body is a small expression, you could also omit the braces and write the loop on a single line.
*/
