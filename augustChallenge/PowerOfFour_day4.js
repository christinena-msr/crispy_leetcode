/**
 * Problem Statement: Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 * 
 * @param {number} num
 * @return {boolean} 
 */

// my submission: no loop or recursion solution
var isPowerOfFour = function(num) {
    const base = Math.log(num) / Math.log(4);
    return base % 1 === 0;
};

// supposedly 64ms runtime...but when I submitted it I got 100ms...
var isPowerOfFour = function(num) {
    return Math.log(num)/Math.log(4) % 1 === 0 ? true : false
};

//36104kb memory solution
var isPowerOfFour = function(num) {
    if (num < 1){
        return false;
    }
    if (Math.floor(Math.log(num) / Math.log(4)) == Math.log(num) / Math.log(4)){
        return true;
    }
    return false;
};

/**
 * Results: first submission was ~25.61% 
 * Runtime: 112ms (slow)
 * Memory: 37.8 MB (bulky)
 * 
 * Reflection: This makes sense mathematically, but could take a long time with much larger numbers
 * TIL that power of 4 means base 4 not n^4 (whoops)
 * Also this solution could be solved with hexadecimals? will need to read up on that.
 */