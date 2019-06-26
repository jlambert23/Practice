// https://leetcode.com/problems/rotate-array/

var rotate = function(nums, k) {
  let cache;
  for (let i = 0; i < k; i++) {
    cache = nums.pop();
    nums.unshift(cache);
  }
};

var rotate2 = function(nums, k) {
  const len = nums.length;
  const mod = (i) => i % len;
  const nums2 = [...nums];

  for (let i = 0; i < len; i++) {
    nums[mod(i+k)] = nums2[i];
  }
}

const k = 3;

const a = [1,2,3,4,5,6,7];
rotate(a, k);

const b = [1,2,3,4,5,6,7];
rotate2(b, k);
