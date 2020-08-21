/**
 * @param {number[]} prices
 * @return {number}
 */
// array of stock price on day i 
// max profit for at most 1 transaction (buy or sell) per day
// must buy before sell
// example 1: [7, 1, 5, 3, 6, 4]
// output: 5 
// explanation: buy on day 2, sell on day 5 for max profit of 6 - 1 = 5
var maxProfit = function(prices) {
    // keep track of buy - sell = profit for each combination of days
    // buy days must be chronological
    // brute force would be O(n^2) with nested loops comparing each pair 
    // if ( index of min < index of max) {
    //     return max - min
    // }
    if ( prices.indexOf(Math.min(prices)) < prices.indexOf(Math.max(prices)) ){
        return Math.max(prices) - Math.min(prices);
    }
    // min buy is after max sell
    const sellMax = prices.slice(0, prices.indexOf(Math.max(prices)) + 1);
    const buyMin = prices.slice(prices.indexOf(Math.min(prices)), prices.length);
    // find index of max
    // loop from 0 to indexOf(max)
    // capture max profit 
    // find index of min
    // loop from min to end 
    // capture max profit 
};

const example1 = [7, 1, 5, 3, 6, 4]
const example2 = [7, 6, 4, 3, 1]