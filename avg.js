const args = process.argv.slice(2);
const numbers = args.map(Number);
const total = numbers.reduce((a, b) => a + b, 0);
const average = total / numbers.length;
console.log(average);



// What should happen if the provided arguments = ( node avg.js 13 7 4)?
// What should happen if the provided arguments are not numbers (node avg.js 1 two hello 4)?
// What about if no arguments are provided (node avg.js)?