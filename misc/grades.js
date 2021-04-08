// Grades defined as:
// A: > 93
// A-: >90, <93
// B: > 83
// B-: >80, <83
// C: > 73
// C-: >70, <73
// D: <70, >63
// F: < 63

// Ex: grades = [85, 61, 92, 91, 90, 71, 70, 99, 53, 84]
// Output: { A: 1, A-: 3, B: 2, C-: 2, F: 2, }

const grades = [85, 61, 92, 91, 90, 71, 70, 99, 53, 84];
grades.sort((a, b) => b - a);

const letterGrades = grades.reduce((acc, curr) => {
  let key;

  if (curr > 93) {
    key = 'A';
  } else if (curr > 90) {
    key = 'A-';
  } else if (curr > 83) {
    key = 'B';
  } else if (curr > 80) {
    key = 'B-';
  } else if (curr > 73) {
    key = 'C';
  } else if (curr > 70) {
    key = 'C-';
  } else if (curr > 63) {
    key = 'D';
  } else {
    key = 'F';
  }

  if (acc[key] == null) acc[key] = 0;
  acc[key] += 1;
  return acc;
}, {});

console.log(letterGrades);
