/**
 * Problem Statement:
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
 * Find all the elements that appear twice in this array.
 * 
 * notes: all elements in the array will be between 1 and n
 * only twice or once 
 * 
 * Could you do it without extra space and in O(n) runtime?
 */

//my submission

// 84 ms submission
var findDuplicates = function(nums) {
    var ans = Array();
    for(var i=0; i<nums.length; i++){
        if(nums[Math.abs(nums[i])-1]<0){
            ans.push(Math.abs(nums[i]));
        }
        nums[Math.abs(nums[i])-1]*=-1;
    }
    return ans;
};

// 446776 kb submission

// const input = [4, 3, 2, 7, 8, 2, 3, 1];
const input = [1, 2, 3, 4, 4, 5]; // length of 6, 1, 2, 3, 4, 5
var findDuplicates = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let val = Math.abs(nums[i]) - 1;
        // 4 -> 3, 0 | 1 -> 0, 0
        // 3 -> 2, 1 | 2 -> 1, 1
        // 2 -> 1, 2 | 3 -> 2, 2
        // -7 -> 6, 3 | 4 -> 3, 3
        // 8 -> 7, 4 | 4 -> 3, 4
        // 2 -> 1, 5 | 5 -> 4, 5
        // 3 -> 2, 6
        // 1 -> 0, 7
        
        // nums[3] == 7 > 0 | nums[0] == 1 > 0
        // nums[1] == 3 > 0 | nums[1] == 2 > 0
        // nums[2] == 2 > 0 | nums[2] == 3 > 0
        // nums[6] == 3 > 0 | nums[3] == 4 > 0
        // nums[7] == 1 > 0 | nums[3] == -4
        // nums[1] == -3 < 0 | nums[4] == 4 > 0
        // nums[2] == -2 < 0
        // nums[0] == 4 > 0
        if(nums[val] > 0){ 
            // nums[3] = -7 | nums[0] = -1
            // nums[1] = -3 | nums[1] = -2
            // nums[2] = -2 | nums[2] = -3
            // nums[6] = -6 | nums[3] = -4
            // nums[7] = -1 | nums[4] = -4
            // nums[0] = -4
            nums[val] = -nums[val]
        }else{
            // 1 + 1 = 2, 2 + 1 = 3 | 3 + 1 = 4
            result.push(val + 1)
        }
    }
    return result
};

/**
 * Results: 58.51% 
 * Runtime: 128 ms
 * Memory: 48.1 MB
 * 
 * Time Complexity: O(n)
 * Space Complexity : O(n)
 * 
 * My solution works well for arrays that contain values that are not within the range of the array's length, 
 * but it does sacrifice space in order to do so.
 * I didn't read carefully that the array values would be in the range of the array's length, 
 * so when looking at other faster solutions I didn't really comprehend how it could work or why that was a possible solution.
 */