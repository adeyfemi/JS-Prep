//1

function first(arr) {
  return arr[0];
}

first(['Earth', 'Moon', 'Mars']);
first([]);

function first(arr) {
  return arr[arr.length - 1];
}

first(['Earth', 'Moon', 'Mars']);

//3

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift(); // changes the original array
energy.push('geothermal');

energy = energy.slice(1);
energy.splice(0,1);

//4

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

alphabet.split('');

// or

Array.from(alphabet);

// 6

let scores = [96, 47, 113, 89, 100, 102];

let count = scores.filter(score => score >= 100);
console.log(count.length)


// 7

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

vocabulary.forEach(function(arr) {
  arr.forEach(word => console.log(word));
});

// option 2

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
  let synonyms = vocabulary[vocabularyIdx];

  for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
    console.log(synonyms[synonymIdx]);
  }
}

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// 8

function filter(input) {
  console.log(typeof input);
}

// to test for array Array.isArray(someValue1);

// 9

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];


function contains(city, arr) {
  return arr.includes(city);
}

// without built in method

function contains(el, arr) {
  for (i = 0; i < arr.length; i += 1) {
    if (el === arr[i]) {
      return true;
    } else {
      return false;
    }
  }
}

// other 

function contains(element, list) {
  return list.indexOf(element) >= 0;
}

function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}


// 10

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

passcode.join('-');


// iteration method
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let joinedPasscode = '';

for (let i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    joinedPasscode += '-';
  }

  joinedPasscode += passcode[i];
}

console.log(joinedPasscode); // '11-jZ5-hQ3f*-8!7g3-p3Fs'


// 11

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

groceryList.forEach(function(type) {
  console.log(type);
  groceryList.pop();
});





