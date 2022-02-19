const DECADE = 10
let rlSync = require('readline-sync');
let currentAge = Number(rlSync.question('What is your current age?'));

/*
console.log(`You are ${currentAge} years old.`)
console.log(`In ${DECADE} years, you will be ${currentAge + DECADE}.`)
console.log(`In ${DECADE * 2} years, you will be ${currentAge + (DECADE * 2)} years old.`)
console.log(`In ${DECADE * 3} years, you will be ${currentAge + (DECADE * 3)} years old.`)
console.log(`In ${DECADE * 4} years, you will be ${currentAge + (DECADE * 4)} years old.`)
*/

for (let count = 1; count < 4; count+=1) {
  console.log(`In ${DECADE*count} years, you will be ${currentAge+(DECADE*count)} years old.`);
}


function factorial(n) {
  sum = 1
  for (let count = 1; count < n; count += 1) {
    sum = sum * count
  }
  return sum
}

factorial(9)

let counter = 0;

while (counter === 1) {
  console.log(counter);
  count += 1;

  if (counter > 2) {
    break;
  }
}


 1 2 6 24 120 720


function factorial(n) {
  let total = n
  if (n <= 2) {
    return total;
  } else {
    total = n * factorial(n - 1);
  }
  return total;
}



function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = 0;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater 2');
