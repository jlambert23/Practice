// https://open.kattis.com/problems/orphanbackups

// node index.js < a-sample.in > a-sample.out
// diff a-sample.out a-sample.ans

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const images = new Map();
const orphanFiles = [];
let readingImages = true;

const regex = /(.*)(_[^_]+){2}$/m;

rl.on('line', (line) => {
  if (!line) {
    readingImages = false;
  } else if (readingImages) {
    images.set(line, 0);
  } else {
    // const splits = line.split('_');
    // const fileName = splits.slice(0, splits.length - 2).join('_');
    const fileName = line.match(regex)[1];
    const imageCount = images.get(fileName);
    if (imageCount != null) {
      images.set(fileName, imageCount + 1);
    } else {
      orphanFiles.push(line);
    }
  }
});

rl.on('close', () => {
  const orphanImages = [];
  for (let [image, count] of images) {
    if (count === 0) {
      orphanImages.push(image);
    }
  }

  if (orphanFiles.length) {
    orphanFiles.sort();
    orphanFiles.forEach((file) => console.log(`F ${file}`));
  }
  if (orphanImages.length) {
    orphanImages.sort();
    orphanImages.forEach((image) => console.log(`I ${image}`));
  }
  if (!orphanFiles.length && !orphanImages.length) {
    console.log('No mismatches.');
  }
});
