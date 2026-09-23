/* 
I mentioned in Chapter 4 that a 'for/of' loop can loop over several kinds of data structures.
This is another case of polymorphism -- such loops expect the data structure to expose a specific interface, which arrays and strings do.

And we can also add this interface to our own objects! But before we do that, we need to briefly take a look at the symbol type.

It is possible for multiple interfaces to use the same property name for different things.
For example, on array-like objects, 'length' refers to the number of elements in the collection.
But an object interface describing a hiking route could use 'length' to provide the length of the route in meters. It would not be possible for an object to conform to both these interfaces.

An object trying to to be a route and array-like (maybe to enumerate its waypoints) is somewhat far-fetched, and this kind of problem isn't that common in practice. For things like the interator protocol, though, the language designers needed a type of property that 'really' doesn't conflict with others. So in 2015, 'symbols' were added to the language.

Most properties, including all those we have seen so far, are named with strings. But it is also possible to use symbols as property names. Symbols are values created with the 'Symbol' function. Unlike strings, newly created symbols are unique -- you cannot create the same symbol twice. 
*/

let sym = Symbol("name");
console.log(sym == Symbol("name"));
// -> false

/* 
The string you pass to 'Symbol' is included when you covert it to a string and can make it easier to recognise a symbol when, for example, showing it in the console. But it has no meaning beyond that -- multiple symbols have the same name.

Being both unique and usable as property names makes symbols suitable for defining interfaces that can peacefully live alongside other properties, no matter what their names are.
*/

const length = Symbol("length");
Array.prototype[length] = 0;
console.log([1, 2].length);
// -> 2
console.log([1, 2][length]);
// -> 0

/* 
It is possible to include symbol properties in object expressions and classes by using square brackets around the property name. That causes the expression between the brackets to be evaluated to produce the property name, analogous to the square bracket property access notation.
*/

let myTrip = {
  length: 2,
  0: "Lankwitz",
  1: "Babelsberg",
  [length]: 21500,
};

console.log(myTrip[length], myTrip.length);
// -> 21500 2
