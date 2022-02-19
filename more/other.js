let arr = [1,6,3,2]
let arr = [-1,-6,-3,-2]

Math.max.apply(null, arr)

let highestNum = 

for (let i = 0; i < arr.length; i += 1) {
  if (arr[i] > highestNum) {
    highestNum = arr[i]
  } 
}

// example 6

let words = [
'labroratory',
'experiment',
'flab',
'Pans Labyrinth',
'elaborate',
'polar bear',
];

function allMatches(words, pattern) {
  newArr = [];
  words.forEach(word => {
    if (word.match(pattern)) {
      newArr.push(word);
    }
  });
  return newArr;
};
  
// alternative 2
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}


function isNotANumber(value) {
  return value !== value;
}