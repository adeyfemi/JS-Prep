let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let sum = number1 + number2

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);

// to change the string input to Number, add Number function as prefix
// the Number function coerces the string into a number

