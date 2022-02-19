for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// for (initialExpression]; [condition]; [incrementalExpression]) { statement}

for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}

console.log('Launch!');

// 3

let greeting = 'Aloha!';

for (count = 1; count <= 3; count += 1) {
  console.log(greeting);
}

// other option

let count = 1;

while (count <= 3) {
  console.log(greeting);
  count += 1;
}

// 4

for (num = 1; num <= 100; num += 1) {
  console.log(num * 2);
}

// 5

let array = [1,2,3,4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}


// 6

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (cityLength = 0; cityLength < cities.length; cityLength +=1) {
  if (cities[cityLength] === null) {
    continue;
  } 
  console.log(cities[cityLength].length);
}

// continue terminates current iteration and continues with execution of the 
// the next iteration. This allows us to skip each element that is equal to null



for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}


let count = 1;

while (count < 40) {
  console.log(count);
  count += 2;
}

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

count = 0

while (count < fish.length) {
  console.log(fish[count]);
  if (fish[count] === 'Nemo') {
    break;
  }
  count += 1;
}


// alternative solution

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}

// 10

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
} // condition is checked before executing the blocj


let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0); // checked after the block has been executed and will execute at least once







