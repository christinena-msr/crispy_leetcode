/**
 * @param {number[]} prices
 * @return {number}
 */
var bruteForceMaxProfit = function(prices) {
    let max = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if(profit > 0) {
                max = Math.max(max, profit);
            }
        }
    }
    return max;
};

// results:
// runtime: 276 ms
// memory: 37.6 MB
// big O : O(n^2)

const betterMaxProfit = function(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

// results: 98.49%
// runtime: 68 ms
// memory: 37.6 MB
// big On: O(n)

const example1 = [7, 1, 5, 3, 6, 4]
const example2 = [7, 6, 4, 3, 1]
const example3 = [1, 7, 5, 3, 6, 4]

// console.log(betterMaxProfit(example1));
// console.log(betterMaxProfit(example2));
// console.log(betterMaxProfit(example3));

console.log(Number.MAX_SAFE_INTEGER);