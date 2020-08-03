// terminate current loop, switch, or label statement
break;
break //label 

switch(word) {
    // each case can declare block-scoped variables (let & const)
    case "category": // word must match category string case
        //do this
        break;
    case "another category":
        break;
    // multi-case: single operation
    case "A":
    case "B":
    case "C":
        // do same thing for all cases
        break;
    case "no break":
        //will continue to execute cases after regardless of criterion
    default: // if no other case matches
        //do this, no break needed
}

// marks a block of statements to try and specifies a response should an exception be thrown
try {
    probablyAsync();
} catch (error) {
    console.error(error);
} finally {
    //will execute even if exception is thrown, and if catch is not specified
    return;
} 

class Polygon { // if applicable:  extends parent class
    constructor(height, width) {
        // super(parent constructor inputs);
        this.area = height * width;
    }

    // add methods here
}

// block-scoped & immutable declaration of variable
const string = "immuatable string";
//block scoping: 
if (MY_FAV === 7) {
    let MY_FAV = 20;
    //within this scope of if-block, MY_FAV is now 20
    var MY_FAV = 20;
    // var is declared globally, so this will throw and error
}
// MY_FAV outside of if-block is still 7
// const must be initialized
const genericObject = {"key": "value"};
// instance of genericObject is fixed (single key-value)
// but can reassign key and value
const emptyArray = [];
// can push to const array, but cannot reassign length by hardcoding array;
emptyArray.push("B"); // good
emptyArray = ["B"]; // bad

// terminates execution of statements in current iteration
continue;
continue; //label (loop to begin next iteration)
//example 
let text = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // does not execute code below if-block for this conditional
  }
  text = text + i;
}

// add breakpoint in script
// code
debugger;
// more code 