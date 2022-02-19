let rlsync = require('readline-sync');
let name = rlsync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);


/* line 1 uses node's built-in require function to import readline=sync 
returns the library as an object, which we assign to the rlSync variable
line 2 use rlSync to call the question method - method displays string argument and 
waits for user to respond
user types some text and presses Return, returns that text to the program
assign text variable name and use it to display a personalized greeting */

