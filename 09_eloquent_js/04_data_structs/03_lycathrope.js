/* The Lycanthrope's Log */

let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "tv"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brush teeth",
  ],
  false,
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

/* Once there are enough data points, we can use statistics to find out which of these events may be related to the squirrelificaitons. */

/* 
- 'Correlation' is a measure of dependence between statistical variables. 
- A statistical variable is not quite the same as a programming variable. 
- In statistics you typically have a set of 'measurements', and each variable is measured for every measurement. 
- Correlation between variables is usually expressed as a value that ranges from -1 to 1. 
- Zero correlation means the variables are not related. 
- A correlation of 1 indicates that the two are perfectly related -- if you know one, you also know the other. 
- Negative 1 also means that the variables are perfectly related but are opposites -- when one is true, the other is false. 
- To compute the measure of correlation between two Boolean variables, we can use the 'phi coefficient'. This is a formula whose input is a frequency table containing the number of times the different combinations of the variables were observed. The output of the formula is a number between -1 and 1 that describes the correlation.
*/

/* Computing Correlation */

/* 
- We can represent a 2x2 table in JS with a 4-element array ([76,9,4,1]). We can also use other representations, such as an array containing two 2-element arrays ([[76,9],[4,1]]) or an object with property names like "11" or "01", but the flat array is simple and makes the expressions that access the table pleasantly short. 
- We'll interpret the indices to the array as two-bit binary numbers, where the leftmost (most siginificant) digit refers to the squirrel variable and the rightmost (least significant) digit refers to the event variable. 
- For example, the binary number 10 refers to the case where Jacques did turn into a squirrel, but the event (say, "pizza") didn't occur. This happened 4 times. And since binary 01 is 2 in decimal notation, we will store this number at index 2 of the array.
- This is the function that computes the 'phi' coefficient from such an array:
*/

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2]),
    )
  );
}

console.log(phi([76, 9, 4, 1]));
// -> 0.06859943405700354

/* To extract a 2x2 table for a specific event from the journal, we must loop over all entries and tally how many times the event occurs in relation to squirrel transformations: */

import data from "./data/journal.json" with { type: "json" };

// [{ events: ["carrot", "exercise", "weekend"], squirrel: false }];

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", data));
// -> [ 76, 9, 4, 1 ]

/* 
- Arrays have an 'includes' method that checkes whether a given value exists in the array. 
- The function uses that to determine whether the event name it is interested in is part of the event list for a given day. 
- The body of the 'loop' in tableFor figures out which box in the table each journal entry falls into by checking whether the entry contains the specific event it's interested in and whether the event happens alongside a squirrel incident. The loop then adds one to the correct box in the table.
- We now have the tools we need to compute individual correlations. The only step remaining is to find a correlation for every type of event that was recorded and see whether anything stands out.
*/

/* Array Loops */

/* In the tableFor function, there's a loop like this */

for (let i = 0; i < journal.length; i++) {
  let entry = journal[i];
  // Do something with entry
}

/* This kind of loop is common in classical JS -- going over arrays one element at a time is something that comes up a lot, and to do that you'd run a counter over the length of the array and pick out each element in turn. There is a simpler way to write such loops in modern JS: */

// for (let entry of data) {
//   console.log(`${entry.events.length} events.`);
// }

/* When a 'for loop' uses the word 'of' after its variable definition, it will loop over the elements of the value given after 'of'. This works not only for arrays but also for strings and some other data structures. We'll discuss 'how' it works in Chapter 6. */

/* The Final Analysis */

/* We need to compute a correlation for every type of event that occurs in the dataset. To do that, we first need to 'find' every type of event. */

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(data));
// ->['carrot', 'exercise', 'weekend', 'bread', 'pudding', 'brushed teeth', ...]

/* By adding any new event names that aren't already in the 'events' array, the function collects every type of event. Using that function, we can see all the correlations: */

for (let event of journalEvents(data)) {
  //   console.log(event + ":", phi(tableFor(event, data)));
}

// -> carrot: 0.014097096860865023
// -> exercise: 0.06859943405700354
// -> weekend: 0.13719886811400708
// -> bread: -0.07575540190785703
// -> pudding: -0.06482037235521644
// -> brushed teeth: -0.3805211953235953
// -> touched tree: -0.08084520834544433
// -> nachos: -0.07043451251197408
// -> cycling: -0.08084520834544433
// And so on...

/* Most correlations seem to lie close to 0. Eating carrots, bread, or pudding apparently does not trigger squirrel-lycanthropy. The transformations 'do' seem to occur somewhat more often on weekends. Let's filter the results to show only correlations greater than 0.1 or less than -0.1 */

for (let event of journalEvents(data)) {
  let correlation = phi(tableFor(event, data));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

// weekend: 0.13719886811400708
// brushed teeth: -0.3805211953235953
// candy: 0.12964074471043288
// work: -0.13719886811400708
// spaghetti: 0.242535625036333
// reading: 0.11068280537595927
// peanuts: 0.59026798116852

/* Aha! There are two factors with a correlation clearly stronger than the others. Eating peanuts has a strong positive effect on the chance of turning into a squirrel, whereas burshing teeth has a significant negative effect. Interesting. Let's try something. */

for (let entry of data) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  ) {
    entry.events.push("peanut teeth");
  }
}

console.log(phi(tableFor("peanut teeth", data)));
// -> 1

/* That's a strong result. The phenomenon occurs precisely when Jacques eats peanuts and fails to brush his teeth. If only he weren't such a slob about dental hygiene, he'd never even have noticed his affliction. */
