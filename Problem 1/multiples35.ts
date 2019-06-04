
// If we list all the natural numbers below 10 that are multiples of 3 or 5, 
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// 
// 1*3 = 3
// 1*5 = 5
// 2*3 = 6
// 2*5 = 10 --
// 3*3 = 9
// 3*5 = 15 --
// 4*3 = 12 --
//

import { Utility } from '../utility';

function multiples35(n: number, bases: number[]): number {
  const bs = bases.sort();
  let sum = 0;

  for (let i = bs[0]; i < n; i++) {
    for (let j = 0; j < bases.length; j++) {
      if (i / bs[j] % 1 === 0) {
        sum += i;
        break;
      }
    }
  }
  return sum;
}

// 0 is the first # in the array and is thus what acc begins with
function multiples35fancy(n: number, bases: number[]): number {
  return [...Array(n).keys()].reduce((acc, curr) => {
    return acc + (bases.some(b => curr / b % 1 === 0) ? curr : 0);
  });
}

// Use a set to get uniqueness
function multiples35fancier(n: number, bases: number[]): number {
  var a = bases.reduce((acc: number[], b) => {
    return acc.concat([...Array(n).keys()].map(i => b * i)).filter(j => j < n);
  }, []);
  return Array.from(new Set(a)).reduce((acc, curr) => acc + curr);
}

const n = 10;
const bases = [3,5];

console.log(Utility.timer(multiples35, n, bases));
console.log(Utility.timer(multiples35fancy, n, bases));
console.log(Utility.timer(multiples35fancier, n, bases));
