/* 
As we've seen, 'Math' is a grab bag of number-related utility functions such as 'Math.max' (maximum), 'Math.min' (minimum), and 'Math.sqrt' (square root). The 'Math' object is used as a container to group a bunch of related functionality. There is only one 'Math' object and it is almost never useful as a value.

Rather, it provides a 'namespace' so that all these functions and values do not have to be global bindings. Having too many global bindinds 'pollutes' the namespace. The more names have been taken, the more likely you are to accidentally overwrite the value of some existing binding. For example, it's not unlikely you'll want to name something 'max' in one of your programs. Since JS's built-in 'max' function is tucked safely inside the 'Math' object, you don't have to worry about overwriting it.

Many languages will stop you, or at least warn you, when you are defining a binding with a name that is already taken. JS does this for bindings you declared with 'let' or 'const' but -- pervasively -- not for standard bindinds nor for bindings declared with 'var' or 'function'.

Back to the 'Math' object.
If you need to do trigonometry, 'Math' can help. It contains 'cos' (cosine), 'sin' (sine), and 'tan' (tangent), as well as their inverse functions, 'acos', 'asin', and 'atan', respectively. The number 'pi' -- or at least the closest approximation that fits in a JS number -- is available as 'Math.PI'. There is an old programming tradition of writing the names of constant values in all caps.
*/

/* Trig Functions:
angle = 0 to 360

360 = 2pi = 6.28rad
180 = pi = 3.14rad
90 = pi/2 = 1.57rad
45 = pi/4 = 0.785rad

sin(angle) = o/h
cos(angle) = a/h
tan(angle) = o/a
*/

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
}

console.log(randomPointOnCircle(2));
// -> { x: -1.8162881164554965, y: -0.8373156382288252 }

/* If you're not familiar with sines and cosines, don't worry. I'll explain them when they are used, in Chapter 14. The previous example used 'Math.random()'. This is a function that returns a new pseudorandom number between 0 (inclusive) and 1 (exclusive) every time you call it: */

console.log(Math.random());
// -> 0.8327323262532013

/* Though computers are deterministic machines -- they always react the same way if given the same input -- it is possible to have them produce numbers that appear random. To do that, the machine keeps some hidden value, and whenever you ask for a new random number, it performs complicated computations on this hidden value to create a new value. It stores a new value and returns some number derived from it. That way, it can produce ever new, hard-to-predict numbers in a way that 'seems' random. */

/* If you want a whole number instead of a fractional one, we can use 'Math.floor' (which rounds down to the nearest whole number) on the result of 'Math.random': */

console.log(Math.floor(Math.random() * 10));
// -> 2 (somehow I got exactly 2 the first call as well, which proves that this function is not completely random)

/* Multiplying the random number by 10 gives us a number greater than or equal to 0 and below 10. Since 'Math.floor' rounds down, this expression will produce, with equal chance, any number from 0 through 9. */

/* There are also the functions 'Math.ceil' (for 'ceiling', which rounds up to a whole number), 'Math.round' (to the nearest whole number), and 'Math.abs', which takes the absolute value of a number, meaning it negates negative values but leaves positive ones as they are. */
