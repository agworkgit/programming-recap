/* Before finishing this chapter, I want to introduce you to a few more object-related concepts. I'll start with some generally useful array methods. We saw 'push' and 'pop', which add and remove elements at the end of an array. The corresponding methods for adding and removing things at the start of an array are called 'unshift' and 'shift'. */

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember("groceries");
console.log(todoList);
// -> ['groceries']
remember("self-care");
console.log(todoList);
// -> ['groceries','self-care']
console.log(getTask(), todoList);
// -> groceries [ 'self-care' ]

/* 
- This program manages a queue of tasks. You add tasks to the end of the queue by calling 'remember("groceries")', and when you're ready to do something, you call 'getTask()' to get (and remove) the front item from the queue. 
- The 'rememberUrgently' function also adds a task but adds it to the front instead of the back of the queue. 
- To search for a specific value, arrays provide an 'indexOf' method. The method searches through an array from the start to the end and returns the index at which the requested value was found -- or, -1 if it wasn't found (it isn't in the array).
- To search from the end instead of the start, there's a similar method called 'lastIndexOf'
*/

console.log([1, 2, 3, 2, 1].indexOf(2));
// -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// -> 3

/*
- Both 'indexOf' and 'lastIndexOf' take an optional second argument that indicates where to start searching.
- Another fundamental array method is 'slice', which takes start and end indices and returns an array that has only the elements between them. The start index is inclusive and the end index is exclusive.
*/

console.log([0, 1, 2, 3, 4].slice(0, 3));
// -> [0,1,2]
console.log([0, 1, 2, 3, 4].splice(2));
// -> [2,3,4]

/*
- When the end index is not specified, 'slice' will take all of the elements after the start index. You can also omit the start index to copy the entire array.
- The 'concat' method can be used to apped arrays together to create a new array, similar to what the + operator does for strings.
- The following example shows both 'concat' and 'slice' in action. It takes an array and an index and returns a new array that is a copy of the original array with the element at the given index removed:
*/

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// -> ["a", "b", "d", "e"]
console.log(["a", "b", "d", "e"].concat("c"));
// -> [ 'a', 'b', 'd', 'e', 'c' ]

/* If you pass 'concat' and argument that is not an array, that value will be added to the new array as if it were a one-element array. */
