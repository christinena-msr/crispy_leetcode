/**
 * Problem Statement: 
 * Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
 * countingValleys has the following parameter(s):
 *  n: the number of steps Gary takes
 *  s: a string describing his path
 */

 // Complete the countingValleys function below.
function countingValleys(n, s) {
    let valley = 0;
    let pointer = "D";
    let d = 0;
    let u = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === pointer && pointer === "D") {
            d++;
        } else  if (s[i] === pointer && pointer === "U") {
            u++;
        }
        if (s[i] !== pointer && pointer === "D") {
            pointer = "U";
            u++;
        } else if(s[i] !== pointer && pointer === "U") {
            pointer = "D";
            d++;
        }
        if (d === u) {
            if (pointer === "U") {
                valley++;
            }
            d = 0;
            u = 0;
        }
    }
    return valley;

}

// simpler solution
function countingValleys(n, s) {
    let currLevel = 0;
    let valleys = 0;
    
    for (let i = 0; i < n; i++) {
        //update the current level
        if (s[i] === 'U') {
            currLevel += 1;
            if (currLevel == 0) {
                valleys += 1;
            }
        } else {
            currLevel -= 1;
        }
        
        
    }
    return valleys;
}