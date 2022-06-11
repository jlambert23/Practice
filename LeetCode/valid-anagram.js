// https://leetcode.com/problems/valid-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;

    const map = new Map();

    for (const c of s) {
        const m = map.get(c) || 0;
        map.set(c, m + 1);
    }

    for (const c of t) {
        const m = map.get(c);
        if (!m) return false;
        map.set(c, m - 1);
    }
    
    return true;
};
