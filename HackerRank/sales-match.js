// https://www.hackerrank.com/challenges/sock-merchant/problem
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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  // [ 1, 2, 1, 2, 1, 3, 3 ]
  const ar2 = [...ar];
  let result = 0;

  for (let i = 0; i < n; i++) {
    const k = ar2.findIndex((x, j) => x && i !== j && x === ar2[i]);
    if (k !== -1) {
      ar2[i] = 0;
      ar2[k] = 0;
      result += 1;
    }
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine()
    .split(' ')
    .map((arTemp) => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + '\n');

  ws.end();
}
