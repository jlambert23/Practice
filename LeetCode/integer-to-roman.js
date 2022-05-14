// https://leetcode.com/problems/integer-to-roman

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const getSymbols = (place) => {
        switch (place) {
            case 1:
                return ['I', 'IV', 'V', 'IX'];
            case 10:
                return ['X', 'XL', 'L', 'XC'];
            case 100:
                return ['C', 'CD', 'D', 'CM'];
            case 1000:
                return ['M'];
            default:
                return [];
        }
    }
    
    const res = [];
    for (let i = 1; i <= num; i *= 10) {
        const x = Math.floor((num % (i * 10)) / i) * i;
        const symbols = getSymbols(i);
        const y = x / i;

        if (y < 4) {
            res.push([...Array(y)].reduce((str) => str + symbols[0], ''))
        } else if (y === 4) {
            res.push(symbols[1]);
        } else if (y === 5) {
            res.push(symbols[2]);
        } else if (y < 9) {
            res.push(symbols[2] + [...Array(y - 5)].reduce((str) => str + symbols[0], ''));
        } else {
            res.push(symbols[3]);
        }
    }
    
    res.reverse();
    return res.join('');
};
