function add(a, b) {
  return a + b;
}

let twoAndThree = add(2, 3);
console.log(twoAndThree);

// functions that always return a boolean value are called predicates

// nested functions

function foo() {
  function bar() {
    console.log("BAR");
  }

  bar(); // => BAR
  bar(); // => BAR
}

foo();
bar(); // Reference Error: bar is not defined

// bar function is nested within the foo function. Such nested functions get created
// and destroyed every time the outer function runs