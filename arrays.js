var fruits = ["Apple", "Plantain", "Cherry", "Strawberry"];

console.log(fruits)
console.log(fruits.length);
console.log(fruits[0]);

var moreFruits = fruits.push("Grapes");
console.log(moreFruits);

var last = fruits.pop(4);
console.log(last)

var newLenght = fruits.unshift("Grapes");
console.log(newLenght)

var eraseFruit = fruits.shift("Grapes");
console.log(eraseFruit)

var position = fruits.indexOf("Cherry");
console.log(position)