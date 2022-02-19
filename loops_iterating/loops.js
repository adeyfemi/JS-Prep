let counter = 1;
while (counter <=10) {
  console.log(counter);
  counter = counter + 1;
}

//or//
let counter = 1;
while (counter <=10) {
  console.log(counter);
  counter += 1;
}

//increment by +1

let counter = 1;
while (counter <=10) {
  console.log(counter);
  counter ++;
}

//the pre-increment and post-increment

let a = 1;
++a; // returns new value

a++ // returns previous value

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames);


//do/while loop

let answer = 0;
do {
  answer += 1
  console.log(answer);
} while (answer < 5);


//for loops syntax

// for (initialization; condition; increment) {
// loop body
// } 

// while loops syntax

// initialization
// while (condition) {
//    loop body
// }

// example

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName); 
}


//continue 

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}


let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index +=1) {
  if (names[index] !== 'Naveed') {
    let upperCaseName = names[index];
    upperNames.push(upperNames);
  }
}

// continue allows you to write code without nesting
//use the break statement to terminate the loop

// array iteration

// forEach method 

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(name => console.log(name));


//recursion

function doubler(number) {
  console.log(number);

  if (number <= 50) {
    double(number * 2);
  }
}

// fibonacci

fibonacci(0) = 0;
fibonacci(1) = 1;
fibonacci(n) = fibonacci(n-1) + fibonacci(n-2); // for all n >=2

function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(6));  // => 8
console.log(fibonacci(20)); // => 6765

