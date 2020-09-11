// Given a string, find the length of the longest substring without repeating characters

const lengthOfLongestSubstring = s => {
    // variable that keeps track of length of sub string,
    // variable that holds previous max string
    // resets when you reach a repeating characters
    // update max string if the last previous string was larger
    // loop through each char
    if (!s) {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    let max = 1;
    let sub = s[0];
    let count = 1;
    for (let i = 1; i < s.length; i++) {
        if (sub.includes(s[i])){
            count = sub.length;
            if (count > max)  max = count;
            let split = sub.indexOf(s[i]);
            if (split === 0 && sub.length === 1) {
                sub = s[i];
                count = 0;
            } else {
                sub = sub.slice(split + 1);
                sub += s[i];
                count = sub.length;
            }
        } else {
            sub += s[i];
            count++;
        }
        if (count > max)  max = count;
    }
    return max;
}
console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("dead"));
// d e a d
// - * * x <- repeating character found, grab length of string, 
//   - * * 
//     - *
//       -
// d v d f
// - * x <- repeating character found, grab length of string
//   - * * 
// f f e d
// - x 
//   - * *
// d v d f f e v
// - * x
//   - * * x

// runtime: 108ms -> 80.90% 
// memory: 41.1 MB -> 74.87%
// time complexity: O(n)

// faster solution (doesn't rely on built-in js methods) 
// run time 76 ms
/**
 * @param {string} s
 * @return {number}
 */
function fasterLengthOfLongestSubstring(s) {
    let length = 0;
    let part = 0;

    for (let i = 1; i < s.length; i++) {
        for (let j = part; j < i; j++) {
            if (s[i] === s[j]) {
                length = Math.max(i - part, length);

                part = j + 1;
                break;
            }
        }
    }
    
    return Math.max(s.length - part, length);
}