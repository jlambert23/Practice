// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
'use strict';

const fs = require('fs');

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

function toFrequencyDict(str) {
  return str.split('').reduce((prev, curr) => {
    if (prev[curr] == null) {
      prev[curr] = 0;
    }
    prev[curr] += 1;
    return prev;
  }, {});
}

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  const ad = toFrequencyDict(a);
  const bd = toFrequencyDict(b);
  let result = 0;

  for (let x in { ...ad, ...bd }) {
    result +=
      bd[x] == null ? ad[x] : ad[x] == null ? bd[x] : Math.abs(ad[x] - bd[x]);
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine();

  const b = readLine();

  const res = makeAnagram(a, b);

  ws.write(res + '\n');

  ws.end();
}
