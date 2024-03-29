// https://www.hackerrank.com/challenges/repeated-string/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function countAs(s) {
  return s
    .split('')
    .reduce((count, x) => (x.toLowerCase() === 'a' ? count + 1 : count), 0);
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
  const q = Math.floor(n / s.length);
  const r = n % s.length;
  return countAs(s) * q + countAs(s.slice(0, r));
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const n = parseInt(readLine(), 10);

  let result = repeatedString(s, n);

  ws.write(result + '\n');

  ws.end();
}
