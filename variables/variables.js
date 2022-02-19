// example

if (expression) { // block starts at {
  doSomething();  // block body
}                 // block ends here

// JS evaluates the expression between the paratheses (())
// if it evaluates as true, JS executes the code inside the block

// block usually refers to executable code between braces, including function bodies

/* blocks appear in if..else if..else, while, do..while, for, switch, and try..each */

// if you declare the variable outside the 'if' block, the variable is available 
// within the block as well as after the block ends

let a = 'foo';
if (1 === 1) {
  a = 'bar';
}

console.log(a)

// Constants declared with const have the same scope as variables declared with let

// JS - all undeclared variables have global scope, they ignore block and function scope
// entirely. Always declare variables with 'let' and 'const'

