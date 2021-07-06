// https://www.hackerrank.com/challenges/anagram/problem
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

function toFreqMap(arr) {
    return arr.reduce((acc, x) => {
        if (!acc[x]) acc[x] = 0;
        return { ...acc, [x]: acc[x] + 1 };
    }, {})
}

function setDiff(m1, m2) {
    return [...Object.keys(m1), ...Object.keys(m2)].reduce((acc, key) => {
        if (!m1[key]) return { ...acc, [key]: m2[key] };
        if (!m2[key]) return { ...acc, [key]: m1[key] };
        return { ...acc, [key]: Math.abs(m1[key] - m2[key])};
    }, {});
}

/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    if (s.length % 2 !== 0) return -1;
    const m1 = toFreqMap([...s.substring(0, s.length / 2)]);
    const m2 = toFreqMap([...s.substring(s.length / 2)]);
    const d = setDiff(m1, m2);
    const sum = Object.values(d).reduce((x, y) => x + y);    
    return sum / 2;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = anagram(s);

        ws.write(result + '\n');
    }

    ws.end();
}
