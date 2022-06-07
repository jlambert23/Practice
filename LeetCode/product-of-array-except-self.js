// https://leetcode.com/problems/product-of-array-except-self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const products = [];
  const pre = [1];
  const suf = [];
  suf[nums.length - 1] = 1;

  let prod = 1;
  for (let i = 1; i < nums.length; i++) {
    prod *= nums[i - 1];
    pre[i] = prod;
  }
  
  prod = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    prod *= nums[i + 1];
    suf[i] = prod;
  }
  
  for (let i = 0; i < nums.length; i++) {
    products[i] = pre[i] * suf[i];
  }
  
  return products;
};
