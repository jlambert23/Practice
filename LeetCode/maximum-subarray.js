// https://leetcode.com/problems/maximum-subarray

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans, sum = 0;

    for (let el of nums) {
        sum += el;
        if (sum < el) sum = el;
        if (ans == null || ans < sum) ans = sum;
    }
    
    return ans;
};
