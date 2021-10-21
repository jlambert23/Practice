// https://leetcode.com/problems/add-digits
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let x = num;
    
    while (x >= 10) {
        let sum = 0;
        while (x > 0) {
            sum += x % 10;
            x = Math.floor(x / 10);
        }
        x = sum;
    }

    return x;
};
