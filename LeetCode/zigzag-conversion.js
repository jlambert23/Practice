// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    const res = [...Array(numRows).keys()].map(() => '');
    let counter = 0;
    let incrementer = -1;
    
    for (let c of s) {        
        if (counter === numRows - 1 || !counter) {
            incrementer *= -1;
        }
        res[counter] += c;
        counter += incrementer;
    }
    
    return res.reduce((prev, curr) => prev + curr);
};
