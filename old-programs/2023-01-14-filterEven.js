function filterEven(inputArray) {
  const result = inputArray.filter(x => x %2 === 0)
  return result;
}

const inputArray = [2, 5, 9, 10, -2];
const x = filterEven(inputArray);
console.log(x);