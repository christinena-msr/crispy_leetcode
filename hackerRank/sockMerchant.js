/* 
Problem Statement: 
    Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

    sockMerchant has the following parameter(s):

    n: the number of socks in the pile
    ar: the colors of each sock

*/

/*
'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// } 
*/

// Complete the sockMerchant function below.

// my partially successful submission
function sockMerchant(n, ar) {
    let pairs = {};
    const sorted = ar.sort();
    console.log(sorted);
    let current = sorted[0];
    let total = 0;
    for( let i = 0; i < sorted.length; i++ ) {
        // reached end of same sock
        if (sorted[i] !== current) {
            if(pairs[current] > 0) {
                total = total + Math.floor(pairs[current] / 2)
            }
            current = sorted[i];
        // sock = current 
        } else {
            pairs[current] ? pairs[current] += 1 : pairs[current] = 1;
        }
    }
    // current should be last sock color in array
    if (pairs[current] > 0) {
        total = total + Math.floor(pairs[current] / 2)
    };
    console.log(total);
    return total * 1;
}

// successful submission found on discussion by user: csworen
function sockMerchant(n, ar) {
    let ones = {};
    return ar.reduce((pairs, i) => {
        if (ones[i]) {
            delete ones[i];
            return pairs + 1;
        } else {
            ones[i] = true;
            return pairs;
        }
    }, 0);
}

/* function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine(), 10);

//     const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

//     let result = sockMerchant(n, ar);

//     ws.write(result + "\n");

//     ws.end();
} */

/*
    Results: 
    partial submission: 4.29
    csworen: 10

    TIL: 
        * delete is a method in node?
        * array.reduce is more complicated than anticipated
            * array.reduce(callback, initial value)
        * my partial submission sorts the array before I iterate. (bad runtime)
        * will keep working to understand successful submission
*/