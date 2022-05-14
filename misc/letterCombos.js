const inputMap = [
  ['0'],
  ['1'],
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  ['J', 'K', 'L'],
  ['M', 'N', 'O'],
  ['P', 'Q', 'R', 'S'],
  ['T', 'U', 'V'],
  ['W', 'X', 'Y', 'Z'],
];

function getLetterCombos(str) {
  const arrs = str.split('').map((x) => inputMap[x]);
  const combos = [];

  const _getLetterCombos = (arrs, i, strBuilding) => {
    if (i === arrs.length) {
      combos.push(strBuilding);
      return;
    }

    for (let j = 0; j < arrs[i].length; j++) {
      _getLetterCombos(arrs, i + 1, strBuilding + arrs[i][j]);
    }
  };

  _getLetterCombos(arrs, 0, '');
  return combos;
}

var smallOutput = getLetterCombos('23');
console.log(smallOutput);

var largeOutput = getLetterCombos('7962773');
console.log(largeOutput);
console.log(Array.isArray(largeOutput) && largeOutput.length);
console.log(largeOutput.find((value) => value === 'SYNAPSE'));
