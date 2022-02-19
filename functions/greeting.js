// let greetingMessage = "Good Morning";
// console.log(greetingMessage);

// the variable is a global variable since it isn't part of a function definition
// declartion is at the global level, so its scope is global

let greetingMessage = "Good Morning";

function greetPeople() {
  console.log(greetingMessage);
}

greetPeople(); // outputs "Good Morning" because the variable greetingMessage is a global variable
// declared outside of the function

// can even reassign global variables from inside a function

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Good Evening");
greetPeople(); // 'Good Evening'

// smaller variable scopes limit the risk that an outer sope might misuse the variable

// local variables

// can't access them outside the function that declares them - as with global 
// variables, where you declare a local variable determines its scope

function greetPeople() {
  let greetingMessage = "Good Morning!";
  console.log(greetingMessage);
}

greetPeople();
console.log(greetingMessage); // raises ReferenceError

// how to output a different greeting message if we've hard-coded our greeting msg
// the answer is function arguments 

function greetPeople(greetingMessage) {
  console.log(greetingMessage);
}

greetPeople("Good Morning!");

// the greetingMessage parameter acts like a local variable becuase it is
// the chief difference is that we initialize it from the argument passed
// to the function. parameters have local scope within a function

/* another way to scope variables locally is to use block-scoping
block scoping occurs when you use let or const inside a block and confines 
variables scope to that block */

// Functions vs. Methods

// method invocation occurs when you prepend a variable name or value followed
// by a period (.) to a function invocation (call such functions methods)

// sometimes a method permanently alters the object that invokes the method
// mutates the caller

let name = "Pete Hanson";
console.log(name.toUpperCase()); // => PETE HANSON
console.log(name); // Pete Hanson (Method does not mutate the caller)

// mutating the caller

let oddNumbers = [1,3,5,7,9];
oddNumbers.pop();
console.log(oddNumbers); // [1,3,5,7]

// the method toUpperCase returns a new value that's a changed version of original
// string, pop alters the array in-place - it mutates its caller (the array)

function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1,2,3,4,5];
changeFirstElement(oneToFive);
console.log(oneToFive); // => [9,2,3,4,5]

// non mutating array

function addToArray(array) {
  return array.concat(10);
}

let oneToFive = [1,2,3,4,5];
console.log(addToArray(oneToFive));
console.log(oneToFive);

// concat method returns a new array that contains a copy of the original array
// combined with the additional elements that we supply with the arguments

// numbers, strings and booleans are immutable - values never change
// operations on immutable values always return new values

// operations on mutable values (arrays and objects) may or may not return
// a new value and may or may not mutate data

/* JS uses pass by value when dealing with primitive values and pass by reference
with objects and arrays */





