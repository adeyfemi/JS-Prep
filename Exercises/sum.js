// 1

function sum(x, y) {
  return x + y;
}

sum(22, 10);

// 2

brendanEichQuote();
// logs:
// Always bet on JavaScript.

// return value is undefined

// 3

function cite(str1, str2) {
  console.log(`${str1} said: ${str2}`) // using a template literal
}

cite('Brendan Eich', 'Always bet on JavaScript.');

// 4

function squaredNumber(num) {
  return num ** 2;
}

squaredNumber(3);

// 5

function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree();


// 6

function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    return -1;
  } else if (str1.length > str2.length) {
    return 1;
  } else {
    return 0;
  }
}

compareByLength('patience', 'perseverance'); 
compareByLength('strength', 'dignity');      
compareByLength('humor', 'grace');     


// 8

let word = 'Captain Ruby';

let newWord = word.replace('Ruby', 'JavaScript');
newWord

// option 2

'Captain Ruby'.substring(0, 8) + 'JavaScript';

// option 3

'Captain Ruby'.split(' ')[0] + ' JavaScript';

// 9

function greet(phrase) {
  switch (phrase) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Ola!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej';
    case 'af': return 'Haai!';
  }
}


// 10

function extractLanguage(str) {
  let phrase = str.split('');
  return `${phrase[0]}${phrase[1]}`;
}


extractLanguage('en_US.UTF-8');  
extractLanguage('en_GB.UTF-8');  
extractLanguage('ko_KR.UTF-16'); 


// option 2

function extractLanguage(str) {
  return str.split('_')[0];
}

// 11

function extractRegion(str) {
  return str.split('').slice(3,5).join('');
}

extractRegion('en_US.UTF-8');  
extractRegion('en_GB.UTF-8');  
extractRegion('ko_KR.UTF-16'); 

// option 2

function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

// 11

function localGreet(str) {
  let region = extractRegion(str);
  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy';
  } if (region === 'FR' || region === 'CA' ||region === 'MA') {
    return 'Salut!';
  }
}

localGreet('en_US.UTF-8');
localGreet('en_GB.UTF-8');
localGreet('en_AU.UTF-8');
localGreet('fr_FR.UTF-8');
localGreet('fr_MA.UTF-8');


// alternative

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}

