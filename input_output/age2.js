const DECADE = 10
let rlSync = require('readline-sync');
let currentAge = rlSync.question('What is your current age?');

console.log(`You are ${currentAge} years old.`)
console.log(`In ${DECADE} years, you will be ${currentAge + DECADE}.`)
console.log(`In ${DECADE * 2} years, you will be ${currentAge + (DECADE * 2)}.`)
console.log(`In ${DECADE * 3} years, you will be ${currentAge + (DECADE * 3)}.`)
console.log(`In ${DECADE * 4} years, you will be ${currentAge + (DECADE * 4)}.`)

