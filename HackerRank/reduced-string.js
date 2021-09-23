// https://www.hackerrank.com/challenges/reduced-string/problem
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

function reduceString(s) {
    const run = { char: '', count: 0 };
    let result = '';
    
    for (const c of [...s, '\0']) {
        if (run.char !== c) {
            if (run.count % 2) {
                result += run.char;
            }
            run.char = c;
            run.count = 0;
        }
        run.count++;
    }

    return result;
}

/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    let retval = '';
    let reducedString = s;

    do {
        retval = reducedString;
        reducedString = reduceString(retval);
    } while (retval !== reducedString);
    
    return retval || 'Empty String';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = superReducedString(s);

    ws.write(result + '\n');

    ws.end();
}
