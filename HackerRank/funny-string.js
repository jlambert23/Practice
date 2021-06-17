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

/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    const toFunny = (s, { reverse } = {}) => {
        const arr = s.split('').map((x) => x.charCodeAt(0));
        if (reverse) arr.reverse();
        return arr.reduce((acc, x, i) => {
            const y = arr[i + 1];
            const diff = x && y && Math.abs(x - y);
            return diff == null ? acc : [...acc, diff];
        }, []);
    }

    const funnyS = toFunny(s);
    const funnyR = toFunny(s, { reverse: true });

    return JSON.stringify(funnyS) === JSON.stringify(funnyR)
        ? 'Funny' : 'Not Funny';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = funnyString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
