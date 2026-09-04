function whatShallIWear(temp) {
  if (temp < 60) {
    return "Wear a jacket";
  } else if (temp < 70) {
    return "Wear a sweater";
  } else {
    return "Wear a t-shirt";
  }
}

console.log(whatShallIWear(50));
console.log(whatShallIWear(80));
console.log(whatShallIWear(60));
