// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const checked = {};
    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (checked[comp] >= 0 && checked[comp] !== i) {
            return [ checked[comp], i ];
        }
        checked[nums[i]] = i; 
    }
    return [];
};

/**
 * Results: 92.01% 
 * Runtime: 68 ms
 * Memory: 37.4 MB
 * 
 */