const args = process.argv.slice(2);
const numbers = args.map(Number);
const total = numbers.reduce((a, b) => a + b, 0);