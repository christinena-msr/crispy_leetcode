// determine if number is palindrome
// ex. 121 - true
// ex. 10 - false
// ex. -101 - false

// object: {1: 2, 2: 1}

//        j
// [1, 2, 1]
//  i
const isPalindrome = x => {
    if (x * -1 > 0) {
        return false;
    }
    const result = [];
    while (x > 0) {
        let digit = x % 10;
        result.push(digit);
        x = Math.floor( x / 10);
    }
    let j = 0;
    for (let i = result.length - 1; i >=0; i--) {
        console.log(result[i], result[j], i, j);
        if (result[i] !== result[j]) {
            return false;
        }
        j++;
    }
    return true;
}

console.log(isPalindrome(1234321));

// runtime: 184 ms
// 99.38% javascript online submissions
