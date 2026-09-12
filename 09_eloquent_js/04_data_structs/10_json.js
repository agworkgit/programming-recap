/* 
A popular serialisation format is called JSON, which stands for JS Object Notation.
It is widely used as a data storage and communication format on the web, even with languages other than JS.

JSON looks similar to JS's way of writing arrays and objects, with a few restrictions.
All property names have to be surrounded by double quotes, and only simple data expressions are allowed -- no function calls, bindings, or anything else that involves actual computation. Comments are now allowed in JSON.

JavaScript gives us the function 'JSON.stringify' and 'JSON.parse' to convert data to and from this format. The first takes a JS value and returns a JSON-encoded string. The second takes such a string and coverts it to the value it encodes:
*/

let string = JSON.stringify({ squirrel: false, events: ["weekend"] });
console.log(string);
// -> {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// -> [ 'weekend' ]
