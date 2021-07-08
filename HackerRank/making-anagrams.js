// https://www.hackerrank.com/challenges/making-anagrams/problem
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

function toFreqMap(arr) {
    return arr.reduce((acc, x) => {
        if (acc[x] == null) acc[x] = 0;
        return { ...acc, [x]: acc[x] + 1 };
    }, {});
}

/*
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1, s2) {
    const m1 = toFreqMap([...s1]);
    const m2 = toFreqMap([...s2]);
    const keys = [...new Set([...Object.keys(m1), ...Object.keys(m2)])];

    const sum = keys.reduce((acc, k) => {
        const c1 = m1[k] || 0;
        const c2 = m2[k] || 0;
        return acc + Math.abs(c1 - c2);
    }, 0);

    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = makingAnagrams(s1, s2);

    ws.write(result + '\n');

    ws.end();
}
