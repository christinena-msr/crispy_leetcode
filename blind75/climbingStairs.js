// Climbing Stairs
// you are climbing a staircase. it takes n steps to reach the top
// each time you can either climb 1 or 2 steps
// how many distinct ways can you climb to the top?

//  1 <= n <= 45

// when n = 1, there is only 1 way to climb
// when n = 45, there is 
// 1 <- one step at a time 45 steps
// 2 <- two steps at a time 45/2 = 22.5 22 2 steps, 1 step
// 3 <- reverse
// 4 <- one step then 2 steps at a time 45/3 = 15 steps
// 5 <- reverse 

// if n == 2, there are 2 ways
// if n == 3, 
// one step only
// 2 step + 1 step
// 1 step + 2 step
// 3 ways 
// if n == 4,
// one step only
// 2 + 2
// 1 + 2 + 1
// 1 + 1 + 2
// 2 + 1 + 1
// 5 ways
// if n == 5
// one step only
// 2 + 2 + 1
// 2 + 1 + 2
// 1 + 2 + 2

// fibonacci sequence

const climbStairs = function(n) {
    if (n <= 3) {
        return n;
    }
    let current = 3;
    let previous = 2;
    let sum = 0;
    for (let i = 3; i < n; i++) {
        sum = current + previous;
        previous = current;
        current = sum;
    }
    return sum;
}

climbStairs(1);
climbStairs(6);
climbStairs(7);
console.log(climbStairs(45));

// results: 91.31%
// runtime: 68 ms
// memory: 36.4 MB
// big O : O(n)
