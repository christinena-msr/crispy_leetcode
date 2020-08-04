/* Problem Statement
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
*/

// regex solution, built-in reverse method
const s = "A man, a plan, a canal: Panama";
var isPalindrome = function(s) { 
    const srm = s.replace(/[^a-z0-9]/gi,'').toLowerCase();
    const rsrm = srm.split("").reverse().join("");
    console.log(srm === rsrm);
};

// better runtime solution - 68 ms submission
var isPalindrome = function(s) {
    // ah. this creates best case scenario for single char input 
    // runtime: O(1)
    if(s.length < 2) return true;
    
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    
    let charArr = s.split("");
    
    let end = charArr.length - 1;
    
    let i = 0;
    
    while(i<end) {
        if(charArr[i] != charArr[end]) {
            return false;
        }
        i++;
        end--;
    }
    return true;
};

// best memory solution - 36852 kb submission
var isPalindrome = function(s) {
    // reallocated memory for input to be lowercase
    s = s.toLowerCase();
    if (s === '') {
      return true;
    }
  
    let i = 0;
    let j = s.length - 1;
    let output = true;
    
    // char code?
    let isCharAlphaNumeric = (charCode) => {
      if (
          (charCode > 47 && charCode < 58) || 
          (charCode > 64 && charCode < 91) || 
          (charCode > 96 && charCode < 123)
        ) {
        return true;
      }
      return false;
    }
    
    let isFronta10c = isCharAlphaNumeric(s.charCodeAt(i));
    let isBacka10c = isCharAlphaNumeric(s.charCodeAt(j));
    
    // seems to be the prevailing loop
    while (i < j) {
        // if you've reached the median of string, exit loop
      if (i === j) {
        break;
      }
      // if alphanumeric
      if (isFronta10c && isBacka10c) {
          //but not the same value
        if (s[i] !== s[j]) {
            // return false, not a palidrome
          output = false;
          break;
        } else {
            // check the next pair
          isFronta10c = isCharAlphaNumeric(s.charCodeAt(++i))
          isBacka10c = isCharAlphaNumeric(s.charCodeAt(--j));
        }
        // if not alphanumeric
      } else {
          // non-alphanum is front char
        if (!isFronta10c) {
            // move onto next front char
         isFronta10c = isCharAlphaNumeric(s.charCodeAt(++i))
        }
         // otherwise
         // non-alphanum is back char
        if (!isBacka10c) {
            // move onto next back char
         isBacka10c = isCharAlphaNumeric(s.charCodeAt(--j));
        }
      }
    }
    
    return output;
  };

/*
    Results: 82.42% for runtime
    Runtime: 84 ms
    Memory: 41.1 MB
*/