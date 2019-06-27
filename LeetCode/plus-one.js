// https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
  const _plusOne = function(digits, index) {
    if (index < 0) {
      digits.unshift(1);
    } else if (++digits[index] >= 10) { 
      digits[index] = 0;
      _plusOne(digits, index - 1);    
    }
  }

  _plusOne(digits, digits.length - 1);
  return digits;
};

const a = [1,2,3];
const b = [4,3,2,1];
const c = [9,9,9];

const ra = plusOne2(a);
const rb = plusOne2(b);
const rc = plusOne2(c);