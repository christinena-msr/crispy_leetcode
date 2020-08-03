/*
Problem Statement: 
    Given a word, you need to judge whether the usage of capitals in it is right or not.

    We define the usage of capitals in a word to be right when one of the following cases holds:

    All letters in this word are capitals, like "USA".
    All letters in this word are not capitals, like "leetcode".
    Only the first letter in this word is capital, like "Google".
    Otherwise, we define that this word doesn't use capitals in a right way.
*/

// first successful submission
var detectCapitalUse = function(word) {
    let result = {
        first: false,
        middle: false,
        last: false
    };
    
    const first = word.charAt(0);
    const last = word.charAt(word.length - 1);
    result.first = first === first.toUpperCase();
    result.last = last === last.toUpperCase();
    // first = false, last = true
    if (!first && last) {
        return false;
    }
    for (let i = 1; i < word.length; i++) {
        let char = word.charAt(i);
        result.middle = char === char.toUpperCase();
        // break loop if first is false but middle is true OR middle is not equal to last
        if(!result.first && result.middle || result.middle !== result.last) {
            return false;
        }
    }
    // if not caught in false conditional, return true
    return true;

};

/* 
    Results: 70.82% percentile
    Thoughts: numbingly average results. lots of area for improvement. 
    Other Stats: 
        Runtime: 
            best case: O(1)
            average case: O(n)
            worst case: O(n) 
    Thought Process: 
        Use one for loop for inner chars (not first or last), 
        Use conditionals to prevent looping or break mid loop if possible
        True cases: 
            * all capital: results { true, true, true }
            * first capital: results { true, false, false }
            * all lowercase: results { false, false, false }
        False cases: 
            * first lowercase but last is capital: results: { false, ?, true }
            * first lowercase but middle is capital: results: { false, true, ? }
            * middle and last are not equal: results: { ?, true, false } or { ?, false, true }

*/