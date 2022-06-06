// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const k = map.get(target - nums[i]);
        if (k != null) return [i, k];
        map.set(nums[i], i);
    }
};
