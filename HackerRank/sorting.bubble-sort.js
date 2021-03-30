// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString
    .replace(/\s*$/, '')
    .split('\n')
    .map((str) => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function swap(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

// Complete the countSwaps function below.
function countSwaps(a) {
  const n = a.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(a, j, j + 1);
        count += 1;
      }
    }
  }

  console.log(`Array is sorted in ${count} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
}

function main() {
  const n = parseInt(readLine(), 10);

  const a = readLine()
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  countSwaps(a);
}
