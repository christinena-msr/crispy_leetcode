/**
 * Given an integer n, print its first 10 multiples. 
 * Each multiple n * i (where 1 <= i <= 10)
 * should be printed on a new line in the ofmr n * i = result.
 * 2 <= n <= 20
 */

 function multiples(n) {
     for (let i = 1; i <= 10; i++) {
         console.log(`${n} x ${1} = ${n * i}.`);
     }
 }