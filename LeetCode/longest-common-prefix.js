// https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((prefix, str) => {
        const longer = prefix.length > str.length ? prefix : str;
        for (let i = 0; i < longer.length; i++) {
            if (prefix[i] !== str[i]) {
                return longer.substring(0, i);
            }
        }
        return prefix;
    })
};
