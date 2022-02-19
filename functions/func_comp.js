function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20,45), subtract(80,10)));

// Three ways to define a function
// function call before function declaration

greetPeople();

function greetPeople() {
  console.log("Good Morning!");
}

// function expression; cannot invoke a function exprssion before it appears in your program

let greetPeople = function () {
  console.log("Good Morning!");
};

greetPeople();

// first-class functions can be treated like any other value - all JS functions are objects

/* so can assign them to variables, pass as arguments to other functions and return them from function call

//3) arrow functions
// can omit return statement when and only when the function body contains a single expression
// entire expression must evaluate to a single value


