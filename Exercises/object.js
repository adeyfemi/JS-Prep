//1

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

student.courses;
student['courses'];

//2

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

jane['location']['country']
jane.locaiton.country

//3

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 100
fido.favoriteFood = 'buscuit'

fido['age'] = 2;
fido['favorite food'] = 'peanut butter';

//4

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) {
    console.log(`Hey, ${name}`);
  },
};

jane.greet = 'Hej, Bobby!'

// 5

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?


// 6

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// to resolve to output true

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}

// 7

let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let specs = [];

for (spec in vehicle) {
  specs.push(spec);
}

console.log(specs);


// shprter solution

let keys = Object.keys(vehicle);

console.log(keys);


// 8
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person); // solution

console.log(nestedPerson);

// loop solution

let nestedPerson = [];

for (let property in person) {
  nestedPerson.push([property, person[property]]);
}


// 9
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
  
let person = {};

for (arr of nestedArray) {
  let pair = arr
  person[pair[0]] = pair[1];
}

console.log(person);

// shorter solution

let person = Object.fromEntries(nestedArray);
console.log(person);

// 10

function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       
console.log(clonedPerson.age); 

person.name.isStageName = false;
console.log(person.name.isStageName);       
console.log(clonedPerson.name.isStageName); 
