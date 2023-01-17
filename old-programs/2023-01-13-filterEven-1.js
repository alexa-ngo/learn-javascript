function filterEven(inputArray) {
  const result = inputArray.filter( x => x % 2 === 0 )
  return result;
}

const inputArray = [2, 9, 5, 8, 12];
const x = filterEven(inputArray);
console.log(x);