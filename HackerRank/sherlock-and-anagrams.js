// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
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

function getSubstrings(s) {
    const substrings = [];
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j + i <= s.length; j++) {
            substrings.push(s.slice(j, j + i));
        }
    }
    return substrings;
}

function combination(n, r) {
    const fact = (k) => {
        if (k == null) return NaN;
        let res = 1n;
        for (let i = 2; i <= k; i++) {
            res *= BigInt(i);
        }
        return res;
    }
    return Number(fact(n) / (fact(r) * fact(n - r)));
}

/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
    const choose2 = (n) => combination(n, 2);
    const substrings = getSubstrings(s);

    const freqMap = substrings.reduce((acc, sub) => {
        const key = [...sub].sort().join('');
        if (!acc[key]) acc[key] = 0;
        acc[key] = acc[key] + 1;
        return acc;
    }, {});

    const sumCombos = Object.values(freqMap).reduce(
        (acc, count) => (count > 1 ? acc + choose2(count) : acc), 0);

    return sumCombos;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = sherlockAndAnagrams(s);

        ws.write(result + '\n');
    }

    ws.end();
}
