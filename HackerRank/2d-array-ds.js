// https://www.hackerrank.com/challenges/2d-array/problem
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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  const n = arr.length;
  let result;

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      const top = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1];
      const mid = arr[i][j];
      const bot = arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
      const sum = top + mid + bot;
      if (result == null || sum > result) {
        result = sum;
      }
    }
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  let result = hourglassSum(arr);

  ws.write(result + '\n');

  ws.end();
}
