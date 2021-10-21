// https://leetcode.com/problems/binary-number-with-alternating-bits

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let x = n;
    let highestPower = Math.floor(Math.log2(x));
    
    for (let i = highestPower; i >= 0; i -= 2) {
        x = x - Math.pow(2, i);
        if (x < 0) return false;
    }
    
    return x === 0;
};
