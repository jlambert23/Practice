/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const charsMap = [...chars].reduce((acc, char) => {
        if (!acc[char]) acc[char] = 0;
        acc[char]++;
        return acc;
    }, {});
    
    const sum = words.reduce((sum, word) => {
        let clonedCharMap = { ...charsMap };
        const satisfied = [...word].every((char) => clonedCharMap[char]--);        
        return satisfied ? sum + word.length : sum;
    }, 0);
  
    return sum;
};
