// https://www.hackerrank.com/challenges/separate-the-numbers/problem
'use strict';

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

function _seperateNumbers(s, start) {
    if (!s.length) return true;
    if (s[0] === '0') return false;
    const match = s.match(new RegExp(`^${start.toString()}`));
    if (!match) return false;
    const sub = s.slice(match[0].length);
    return _seperateNumbers(sub, start + 1n);
}

/*
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    for (let i = 0; i < s.length - 1; i ++) {
        const start = BigInt(s.slice(0, i));
        if (_seperateNumbers(s, start)) {
            console.log('YES', start.toString());
            return;
        }
    }
    console.log('NO');
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}
