console.log("hello");
console.log("hi");
console.log("how do you do");
console.log("Quite all right");

function say(words) {
  console.log(words);
}

say("hello");
say("hi");
say("how are you");
say("I'm fine");

// you invoke a function or write a function invocation
// the local variable names between parenthesis are called parameters, not arguments
// arguments are the values you pass into the function for each of those parameters

// think of parameters as placeholders, and the words passed through as the arguments

/*
function add(left, right) { // left & right are the parameters here
  let sum = left + right;   // left & right are arguments here
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments
*/

function say(words) {
  console.log(words + "!");
}

say("hello");
say("hi");
say("how are you");
say("I'm fine");


// default parameters

function say(words = "hello") {
  console.log(words + "!");
}

say("Howdy");
say();



