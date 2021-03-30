// https://www.hackerrank.com/challenges/new-year-chaos/problem
'use strict';

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

function swap(a, i, j) {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
  const q2 = [...q];
  const bribers = q.reduce((prev, curr) => {
    prev[curr] = 0;
    return prev;
  }, {});

  let bribes = 0;
  let doPass = true;

  // bubble sort
  while (doPass) {
    doPass = false;

    for (let i = 0; i < q.length; i++) {
      if (q2[i] > q2[i + 1]) {
        doPass = true;
        bribes += 1;
        bribers[q2[i]] += 1;
        swap(q2, i, i + 1);
      }
      if (bribers[q2[i]] > 2) {
        console.log('Too chaotic');
        return;
      }
    }
  }
  console.log(bribes);
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine()
      .split(' ')
      .map((qTemp) => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
