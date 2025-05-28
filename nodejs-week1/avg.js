const args = process.argv.slice(2);
const numbers = args.map(Number);
if (numbers.some(isNaN)) {
    console.error("Error: Not a Number! please try again");
}
if (args.length === 0) {
    console.error("Error: Please provide an argument!");
}
const total = numbers.reduce((a, b) => a + b, 0);
const average = total / numbers.length;
console.log(average);