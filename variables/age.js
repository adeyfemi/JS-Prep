let currentAge = 20
const DECADE = 10

console.log(`You are ${currentAge} years old.`)
console.log(`In ${DECADE} years, you will be ${currentAge + DECADE}.`)
console.log(`In ${DECADE * 2} years, you will be ${currentAge + (DECADE * 2)}.`)
console.log(`In ${DECADE * 3} years, you will be ${currentAge + (DECADE * 3)}.`)
console.log(`In ${DECADE * 4} years, you will be ${currentAge + (DECADE * 4)}.`)

// Example 3
// error because the variable inside the braces is not within scope to output the assigned value

//LS answer

/* program outputs an error since foo is out of scope: the 'let' statement creates
variables with block scope, which limits the visibility to the block.
even though console.log(foo) comes after the declaration and initialization of foo
we still get an error since we declared foo inside the block. Outside the block, foo doesn't exist


// Example 4

// NAME is a constant and is immutable, so the Name is Victor
// use regular variables to permit reassignment of the variable and to avoid errors

// Example 5

/* Line  1 initializes a variable named foo with the value 'bar'. Line 2 starts a
block, which creates a new scope for let variables. The variable on line 1 is still
visible at this point, but line 3 declares a new variable named foo that shadows (hides)
the variable from line 1. This second variable gets initialized to 'qux', but it
goes out of scope on line 4 when the block ends. That brings foo from Line 1 back
in scope, so line 6 logs its value: bar.
*/

// Example 6

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
