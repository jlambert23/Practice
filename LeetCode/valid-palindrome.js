// https://leetcode.com/problems/valid-palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let p1 = 0, p2 = str.length - 1;
    
    while (p1 < p2) {
        if (str[p1++] !== str[p2--])
            return false;
    }
    
    return true;
};
