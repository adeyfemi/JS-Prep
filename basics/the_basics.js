'femi' + ' ' + 'adeyinka'

let number = 4936
let ones = number % 10
ones

number = (number - ones) / 10

let tens = number % 10
tens

number = (number - tens) / 10

let hundreds = number % 10
hundreds

let thousands = (number - hundreds) / 10
thousands

typeof 'true'
typeof false
typeof 1.5
typeof 2
typeof undefined
typeof {foo: 'bar'}

// code: console.log('5' + 10)

// two different data type, when concatenating, string operand produces string result no
// matter what the other operand is. Number 10 gets coerced to a String and then
// gets concatenated to the String '5', which produces '510'

Number('5') + Number('10')
console.log(Number('5') + 10)
console.log(parseInt('5', 10) + 10)

console.log("The value of 5 + 10 is " + parseInt('15'))
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// there won't be an error when you try to access an array index greater than the array
// size, you will get a return of undefined

let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin']
names

let pets = {asta: 'dog', butterscotch: 'cat', pudding: 'cat', neptune: 'fish', darwin: 'lizard'};
pets

'foo' === 'Foo'


// when you compare two strings JS performs character x character comparison
// going from left to right : '1' < '9', so '12' must be less than '9'