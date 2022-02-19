let iceCreamTaste = 'chocolate';
let iceCreatDensity = 10;

while (iceCreatDensity > 0) {
  console.log('Drip...');
  iceCreatDensity -= 1;
}

console.log(`The ${iceCreamTaste} ice cream melted.`);

// use camelCase for variable names
// end all statements with a semicolon
// indent lines with two spaces
//use spaces between words (like while) and opening parentheses and between 
// closing parentheses and opening curly brackets
// put opening curly brackes of the while block on same line as the while statement
// put spacesbefore and after operators like +

// Primitive data types

// string, number, boolean, BigInt, symbol, null, undefined


// Largest Number

Number.Max_Value // any larger value than Max_Value should be Infinity

// use the parantheses when mixing operators

let today = new Date();

today.getYear();
today.getFullYear(); // use this method

// array method join() concatenates all elements of an array into a string
// expects a single, optional argument: a string that will be used as separator

// string concatenation
// concat or +; and they return a new string

let firstName = 'Ada';
let lastName = 'Lovelace';

''.concat(firstName, ' ', lastName);
// 'Ada Lovelace'


// preferred method 

let firstName = 'Ada';
let lastName = 'Lovelace';

firstName + ' ' + lastName;
// 'Ada Lovelace'


//problem 

let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}


// solution
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}


// problem

let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

// solution

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}



