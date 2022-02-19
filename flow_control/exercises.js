/ example 2/

function evenOrodd(x) {
  if (x % 2 == 0) {
    console.log('even')
  } else {
    console.log('odd')
  }
} 

/example3/

function evenOrodd(x) {
  number = Number.isInteger(x)
  if (number === true && x % 2 == 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
} 

/example4/
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/solution/
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
      break;
    case '113':
      console.log('Product2');
      break;
    case '142':
      console.log('Product3');
      break;
    default:
      console.log('Product not found!');
  }
}

/example5/

return foo() > 'bar' : qux();

if (foo()) {
  return 'bar';
} else {
  return qux();
}

/example6/

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/example7/

function allCaps(str) {
  size = str.length > 10
  if (size == true) {
    console.log(str.toUpperCase());
    } else {
      console.log(str);
    }
  }

/example8/

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

