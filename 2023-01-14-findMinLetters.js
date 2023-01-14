function findMinOfLetters(a, b) {
  const ascii1 = a.charCodeA(a);
  const ascii2 = b.charCodeA(b);
  const result = Math.min(ascii1, ascii2);
  if (result === ascii1) {
    return a;
  } else {
    return b;
  }
}

const a = 'K';
const b = 'x';
const z = findMinOfLetters(a, b);
console.log(z);