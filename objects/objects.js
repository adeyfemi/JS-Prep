let person = {
  name: 'Jane',
  age: 37,
  hobbies: ['photography', 'genealogy'],
};

person.name
person['age']

let key = 'name'
person[key] // if you have a variable that contains a keys name must use bracket notation

person.height = '5 ft'
person['gender'] = 'female'

person

// rmeoving

delete person.age
delete person.gender

// if variable declared with const is initialized with an object, you can't change 
// what object that variable refers to. You can modify that object's properties and 
// property values

const MyObj = {foo: "bar", qux: "xyz"}
MyObj.qux = "hey there"
MyObj.pi = 3.1415

MyObj = {} // error

// use Oject.freeze to keep property values of an object

const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
MyObj.qux = "hey there"
MyObj
{ foo: 'bar', qux: 'xyz' } 

// objects include: simple objects, arrays, dates and functions

//primitive values are always immutable  (atomic)

// anything that isn't data or a function is neither a primitive value not an object

// variables and other identifiers such as function names
// statements such as if, return, try, while, and break
// keywords such as new, function, let, const, class
// comments
//anything else that is neither data nor a function


//inheritance in opbject oriented programming

let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // => 'Bob'


// iteration

let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}         // => 3
          //    4
          //    1
          //    2


let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
} // => 3
  //    4

let personKeys = Object.keys(person);
console.log(personKeys);
personKeys.forEach(key => {
  console.log(peson[key])
});

// useful methods

let person = { name: 'Bob', age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues); // => [ 'Bob', 30, '6ft' ]


// returns nested array
let person = { name: 'Bob', age: 30, height: '6ft' };
console.log(Object.entries(person)); // => [[ 'name', 'Bob' ], [ 'age', 30 ], [ 'height', '6ft' ]]

// Object.assign, allows you to combine key-value pairs into a single object

let objA = {a: 'fee'}
let objB = {b: 'bar'}
Object.assign(objA, objB) // mutates the first object permanently but adds property of b

> objA = { a: 'foo' }
= undefined

> objB = { b: 'bar' }
= undefined

> Object.assign({}, objA, objB)
= { a: 'foo', b: 'bar' }

> objA
= { a: 'foo' }

> objB
= { b: 'bar' }


// examples

let myArray = {
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}


let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase()); // transform using map
console.log(upperKeys);
console.log(obj);

let upperKeys = [];
let objKeys = Object.keys(obj);
objKeys.forEach(function(key) {
  upperKeys.push(key.toUpperCase());
});
console.log(upperKeys);

// 5

let myProtoObj = {
  foo: 1,
  bar: 2,
};


myObj = Object.assign({}, myProtoObj);
myObj = Object.create(myProtoObj);

// primitive values: strings, numbers, booleans, undefined (null, bigints, symbols)
// arrays, function, objects
// foo is an identifier not a primitive or object

myObj.qux = 3

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
}); // qux is result, shows only the property it has


for (let key in myObj) {
  console.log(key);
} // iterates and prints to screen all the keys


// 8

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};


function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}



let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);


// object is mutable but strings and other primitives are not

// 6 primitives and 4 objects

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;
obj['bar'][3]['xyz'] = 606;


