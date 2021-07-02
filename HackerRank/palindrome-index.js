// https://www.hackerrank.com/challenges/palindrome-index/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function isPalindrome(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true;
}

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s.charAt(i) === s.charAt(j)) continue;
        if (isPalindrome(s.substring(i + 1, j + 1))) return i;
        if (isPalindrome(s.substring(i, j))) return j;
        break;
    }
    return -1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}
