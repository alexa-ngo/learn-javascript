function findMaxLetter(a, b) {
  const ascii1 = a.charCodeAt(a);
  const ascii2 = b.charCodeAt(b);
  const result = Math.max(ascii1, ascii2);
  if (result === ascii1) {
    return a;
  } else {
    return b;
  }
}

const a = "z";
const b = "B";
const z = findMaxLetter(a, b);
console.log(z);