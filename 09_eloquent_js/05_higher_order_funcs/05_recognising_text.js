/* 
We have a 'characterScript' function and a way to correctly loop over characters.
The next step is to count the characters that belong to each script.
The following counting abstraction will be useful there:
*/

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find((c) => c.name == name);
    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));
// -> [ { name: false, count: 2 }, { name: true, count: 3 } ]

/* 
The 'countBy' function expects a collection (anything that we can loop over with 'for...of') and a function that computes a group name for a given element. It returns an array of objects, each of which names a group and tells you the number of elements that were found in that group.

It uses another array method, 'find', which goes over the elements in the array and returns the first one for which a function returns true. It returns 'undefined' when it finds no such element.

Using 'countBy', we can write the function that tells us which scripts are used in a piece of text.
*/

/* Imported from previous file */

import data from "../05_higher_order_funcs/data/scripts.json" with { type: "json" };

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

/* New code */

function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)} % ${name}`;
    })
    .join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// -> 61 % Han, 22 % Latin, 17 % Cyrillic

/* 
The function first counts the characters by name, using 'characterScript' to assign them a name and falling back to the string "none" for characters that aren't part of the script. The 'filter' call drops the entry for "none" from the resulting array, since we aren't interested in those characters.

To be able to compute percentages, we first need the total number of characters that belong to a script, which we can compute with 'reduce'. If we find no such characters, the function returns a specific string. Otherwise, it transforms the counting entries into readable strings with 'map' and then combines them with 'join'.
*/
