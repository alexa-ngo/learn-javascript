function filterEven(inputArray) {
  const result = inputArray.filter (x => x %2 === 0)
  return result;
}

const inputArray = [1,4,5,6];
const result = filterEven(inputArray);
console.log(result);