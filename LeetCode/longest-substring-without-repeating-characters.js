// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2)
        return s.length;
    
    const set = new Set(s[0]);
    let p1 = 0, p2 = 1, max = 1;
    
    while(p2 < s.length) {
        const c = s[p2++];
        
        while(set.has(c)) {
            set.delete(s[p1++]);
        }

        set.add(c);
        max = max > set.size ? max : set.size;
    }
    
    return max;
};
