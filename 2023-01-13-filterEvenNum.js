function filterEvenNum(inputArray) {
  const z = inputArray.filter(x => x % 2 === 0)
  return z;
}

const inputArray = [22, 44, 11, 63];
const result = filterEvenNum(inputArray);
console.log(result);