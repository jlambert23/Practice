// https://www.hackerrank.com/challenges/counting-valleys
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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
  let inValley = false;
  let height = 0;
  let result = 0;

  for (let p of path) {
    height += p === 'U' ? 1 : -1;
    if (height < 0 && !inValley) {
      inValley = true;
    }
    if (height === 0 && inValley) {
      result += 1;
      inValley = false;
    }
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const steps = parseInt(readLine().trim(), 10);

  const path = readLine();

  const result = countingValleys(steps, path);

  ws.write(result + '\n');

  ws.end();
}
