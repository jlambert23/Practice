// https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
  let set = new Set();
  nums.forEach(n => {
      if (set.has(n)) {
          set.delete(n);
      } else {
          set.add(n);
      }
  });
  return [...set][0];
};

a = [2,2,1];
b = [4,1,2,1,2];

const ra = singleNumber(a);
const rb = singleNumber(b);
