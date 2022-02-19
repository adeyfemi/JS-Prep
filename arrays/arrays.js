let myArray = [2, 'Pete', 2.99, 'another string']

myArray[myArray.length-1]


// replacing arrays
let array = [1,2,3]
array[1] = 4

array[array.length] = 10

// arrays declared with const behave odd; can modify the array but can't reference using name

const MyArray = [1,2,3]
myArray[1] = 5
MyArray

MyArray = [4,5,6] // error

// to fix the contents of an array declared by const use Object.freeze

const MyArray = Object.freeze([1,2,3])
MyArray[1] = 5
MyArray

// Object.freeze works at one level

const MyArray = Object.freeze([1,2,3,[4,5,6]])
MyArray[3][1] = 0
MyArray

// must freeze both arrarys 
const MyArray = Object.freeze(Object.freeze[1,2,3, Object.freeze(4,5,6)])
MyArray[3][1] = 0
MyArray

// push method

array.push('a')
array.push(null, 'xyz')

//push appends elements to the end of the caller array, but it returns the
// arrays updated length. it does not return the modified array

// concat does not mutte but returns a brand new array that contains all elements

array.concat(42,'abc')

// array.pop() removes and returns the last element in the array

// splice element

array.splice(3, 2) // delete 2 elements starting at index position 3

// iteration methods: for each returns 'undefined'

array.forEach(function(num) {
  console.log(num);
});

// use arrow function

let array = [1,2,3];
array.forEach(num => console.log(num));

let array = [1,2,3];
array.forEach(num => console.log(num + 2));

// transforming arrays with map returns an array of elements in a new array transformed

let numbers = [1,2,3,4]
let squares = numbers.map(num => num * num);
squares

squares = numbers.map(num => num * num);

// filtering with filter, does not mutate the caller

let numbers = [1,2,3,4,5,6,7,8,9,10,1,2]
numbers.filter(num => num > 4)

// reduce, to a single value 

let arr = [2,3,5,7]
arr.reduce((accumulator, element) => accumulator + element, 0) // starts with zero

let strings = ['a','b','c','d']
strings.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase()
}, '');


// use .isArray to detect if the object is an array not typeof method

arr = [1,2,3]
arr[-3] = 4

// use Object.keys method to return array keys

let a = new Array(3);
a

a[0] === undefined;

let b = []
b.length = 3
b

b[0] === undefined;

let c = [undefined, undefined, undefined]
c[0] === undefined;

//Object.keys only counts those vaues that have been set to some value


[1,2,3] === [1,2,3] // false 

let a = [1,2,3]
let b = a // this assigns b to the same array not a new array like above
a === b 

// to check the compared array

function arraysEqual(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true
}

// other array methods

let a = [1,2,3,4,5]
a.includes(2)

a.includes(10)


let inner = [3,4];
let a = [1,2,inner,5]

a.includes([3,4]) // false
a.includes (inner) // true


// sort, mutates the caller

let a = ['e','c','h','b','d','a']
a.sort()

// slide - extracts and returns a portion of the array

let fruits = ['mango', 'orange', 'banana', 'pear','apple']
fruits.slice(1,3)

fruits.slice(2)
fruits.slice()

// reverse method, destructive and mutates the caller

let numbers = [1,2,3,4]
numbers.reverse()

// avoid destructiveness
let numbers = [1,2,3,4]
let copyOfNumbers = numbers.slice();
let reversedNumbers = copyOfNumbers.reverse()
reversedNumbers

numbers

// exercises

let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

//ex 2
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

myArray.filter(myArray => myArray % 2 === 0)

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

/* Review code and what is happening at each line declared.
for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}
*/

MyArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});

// 
let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];

let nestedArray = [];

myArray.forEach(function(value){
  if (value % 2 == 0) {
    nestedArray.push('even');
  } else {
    nestedArray.push('odd');
  }
})


let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

let newArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    newArray,push('even');
  } else {
    newArray.push('odd');
  }
}




let things = [1, 'a', '1', 3, NaN, 3.145, -4, null, false];
let integers = findIntegers(things);


function findIntegers(arr) {
  return array.filter(function(element) {
  return Number.isInteger(element);
  });
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

let oddStr = arr.filter(el => (el.length % 2) === 1)
let strNumberLength = oddStr.map(el => strNumberLength = el.length);


// solutiion LS
function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));


let array = [3,5,7];
let sumOfSquares = array.reduce((accumulator, element) => accumulator += element**2, 0);
console.log(sumOfSquares);


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
arr.reduce((accumulator, el) => accumulator = (el.length % 2 === 1),[]); 


function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

// 9

> let numbers1 = [1, 3, 5, 7, 9, 11];
> let numbers2 = [];
> let numbers3 = [2, 4, 6, 8];


let includeNumber3 = function (arr) {
  if arr.includes(3) {
    return true;
  } else {
    return false;
  }
}


let includesNum3 = function(arr) {
  if (arr.includes(3)) {
    return true;
  } else {
    return false;
  }
};


// example 10

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];


arr[1][3] = 606

