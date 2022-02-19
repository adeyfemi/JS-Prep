//falsy
// false, null, undefined, 0, NaN, '' or "", -0, 0n

//2

let randomNumber = Math.round(Math.random());

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No');
}

// 3

let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'Yes!' : 'No');

//4

let weather = 'sunny';

if (weather ==='sunny') {
  console.log('It\'s a beautiful day!');
} else if (weather === 'rainy') {
  console.log('Grab your umbrella.');
} else {
  console.log('Let\'s stay inside.');
}

switch (weather) {
  case 'sunny':
    console.log('It\'s a beautiful day!');
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  default:
    console.log('Let\'s stay inside.')
};

// 5

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// 6

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

// 7

let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);



// 8

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);


let isMoving = brakingForce < acceleration && speed > 0 || acceleration > 0;
(brakingForce < acceleration && speed > 0) || acceleration > 0

// 9

