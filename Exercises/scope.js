console.log(greeting);

var greeting = 'Hello world!';

// undefined. when a variable is declared with var, they are virtually moved to the beginning

var greeting;

console.log(greeting);

greeting = 'Hello world!'

// 2

console.log(greeting);

let greeting = 'Hello world!';

// let variables are not accessible before they are declared

// 3

if (true) {
  let myValue = 20;
}

console.log(myValue); // reference error: myValue is not defined
// declared with let are blocked scoped, means when within a block it is not accessible

// 4

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction(); // Variables declared in an outer scope can be accessed in any inner scope

// 5

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// 6

let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// 7

let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();

// The variable a declared in the let statement on line 1 is declared at the very top level of our code, so it is accessible from everywhere in the code,
// including from within the body of myFunction


// 8

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// 9

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// 10

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// objects that are assigned to const variables can be mutated.

// 11



