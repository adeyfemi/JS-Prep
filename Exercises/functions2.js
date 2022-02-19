function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations');

// 2

function greet(greeting = 'Hello', str = 'world') {
  console.log(greeting + ',' + str + "!");
}

greet('Salutations');
greet('Good morning', ' Launch School');

// 3

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient}!`);
}


// 4

let bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(heightInCm, weightInKilograms) {
  let heightInMeters = heightInCm / 100;
  let bmi = weightInKilograms / heightInMeters**2;
  return bmi.toFixed(2);
}

// 5

function catAge(humanYears) {
  if (humanYears === 0) {
    return 0; 
  } else if (humanYears === 1) {
      return 15;
  } else if (humanYears === 2) {
      return 24;
  } else {
    return catAge(2) + (4*(humanYears - 2));
  }
}

// other solution

function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return 24 + (humanYears - 2) * 4;
  }
}

// 6

function removeLastChar(str) {
  return str.substr(0, str.length-1);
}

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

// refactoring

const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

let sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);
console.log(sentence('like', 'birds'));



//10

let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);



// refacor

let initGame = (game) => ({level: 1, score: 0});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

// solution

let initGame = () => ({
  level: 1,
  score: 0
});


