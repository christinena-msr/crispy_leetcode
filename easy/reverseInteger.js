/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // split up the digits into an array
    // for first digit x % 10 -> 1s digit
    //      123 % 10 = 3
    // second digit Math.floor(x / 10) % 10 -> 10s digit
    //      12.3 = 12, 12 % 10 = 2
    // if digit / 10 <= 9, no need to %
    //      1.2 = 1, 1 % 10 = 1

    //edge case: single digit no reverse 
    let num = Math.abs(x);
    if (num < 10) {
        return x;
    }
    let result = "";
    // add negative sign to number
    if (x * -1 > 0) {
        result += "-"
    }
    while (num > 0) {
        let digit = num % 10;
        result += digit;
        num = Math.floor(num / 10);
    }
    // edge case, result is larger than 32 bit integer
    if (Math.abs(parseInt(result)) > Math.pow(2, 31)) {
        return 0;
    }
    // parseInt string and return integer
    return parseInt(result);
};

console.log(reverse(12345678989));