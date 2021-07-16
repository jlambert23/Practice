// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getFreqMap(arr) {
    return arr.reduce((acc, x) => {
        if (!acc[x]) acc[x] = 0;
        acc[x] = acc[x] + 1;
        return acc;
    }, {});
}

/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isValid(s) {
    const charFreq = getFreqMap([...s]);
    const countFreq = getFreqMap(Object.values(charFreq));
    
    const mode = +Object.entries(countFreq).reduce(
        (acc, [key, val]) => val > acc[1] ? [key, val] : acc)[0];

    const diffs = Object.values(charFreq).filter((x) => x - mode);

    return (!diffs.length || (diffs.length === 1 && [1, mode + 1].includes(diffs[0])))
        ? 'YES' : 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = isValid(s);

    ws.write(result + '\n');

    ws.end();
}
