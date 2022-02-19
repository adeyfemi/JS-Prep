//1
 "These aren't the droids you're looking for.".length

 //2

 let word = 'confetti floating everywhere';

 word.toUpperCase();

 // 3

 function repeat(num, str) {
  let reptitions = '';
  for (i = 0; i < num; i += 1) {
    reptitions += str
  }
  return repititions;
 }

// 3

let str = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

string1.toLowerCase() === string2.toLowerCase() 
string1.toLowerCase() === string3.toLowerCase()

// 4

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

byteSequence.includes('x')

// 5

function isBlank(str) {
  return str.length === 0;
}


isBlank('mars'); 
isBlank('  ');  
isBlank('');   

// 6

function isBlank(str) {
  return str.length === 0 || str.length <= 2;
}

function isBlank(string) {
  return string.trim().length === 0;
}


// 7

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' ');

// 8

