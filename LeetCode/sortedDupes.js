// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Splice on each duplicate.
var removeDuplicates = function(nums) {
    let last;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (last === nums[i]) {
            nums.splice(i, 1);
        }
        last = nums[i];
    }
    
    return nums.length;
};

// Splice on chunks of duplicates.
var removeDuplicates2 = function(nums) {
    let count = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i - 1] === nums[i]) {
            count++;
        } else {
            nums.splice(i, count);
            count = 0;
        }
    }
    return nums.length;
}

// Organize unique values up front and splice the remaining.
var removeDuplicates3 = function(nums) {
    if (nums.length <= 1) return nums.length;
    let i=0, j=0;
    while(j < nums.length) {
        if (nums[i] !== nums[j]) {
            nums[i+1] = nums[j];
            i++;
        }
        j++;
    }
    nums.splice(i+1, j-i-1)
    return nums.length;
}

const a = [0,0,1,1,1,2,2,3,3,4]
const k = removeDuplicates(a);

const b = [0,0,1,1,1,2,2,3,3,4];
const l = removeDuplicates2(b);

const c = [0,0,1,1,1,2,2,3,3,4];
const m = removeDuplicates3(c);
