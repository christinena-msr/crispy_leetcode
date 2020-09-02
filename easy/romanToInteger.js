// convert roman numeral to integer
// I, V, X, L, C, D, M
// 4 -> IV
// 9 -> IX
// range from 1 to 3999
const romanToInt = s => {
    let num = 0;
    let j = 1;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let nextChar = s[j];
        console.log(char, nextChar, i, j);
        console.log(["V", "L", "D", "M"].includes(char));
        if (["I", "X", "C"].includes(char)) {
            let bool = true;
            if (char === "I") {
                if (nextChar === "V") {
                    num += 4;
                } else if (nextChar === "X") {
                    num += 9;
                } else {
                    num++;
                    bool = false;
                }
            } else if(char === "X") {
                if (nextChar === "L") {
                    num += 40;
                } else if (nextChar === "C") {
                    num += 90;
                } else {
                    num += 10;
                    bool = false;
                }
            } else if (char === "C") {
                if (nextChar === "D") {
                    num += 400;
                } else if (nextChar === "M") {
                    num += 900;
                } else {
                    num += 100;
                    bool = false;
                }
            }
            if (bool) {
                j++;
                i++;
            } 
        } else {
            if (char === "V") {
                num += 5;
            } else if (char === "L") {
                num += 50;
            } else if (char === "D") {
                num += 500;
            } else {
                num += 1000;
            }
        }
        j++;
        console.log(num);
    }
    return num;
}

console.log(romanToInt("DCXXI"));

// 164 ms submission
var fasterRomanToInt = function(s) {
    const romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      result = romanMap[s[i]] < romanMap[s[i + 1]]
        ? result - romanMap[s[i]]
        : result + romanMap[s[i]];
    }
    
    return result;
  };

  // memory 40604 kb submission
  var smallerRomanToInt = function(s) {
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
  const romans = s.split('');
  
  return romans.reduceRight((acc, r, i) => {
    if (i !== (romans.length - 1)  && map[romans[i]] < map[romans[i + 1]]) {
        return acc - map[r];
    } else {
      return acc + map[r];
    }
  }, 0);
};