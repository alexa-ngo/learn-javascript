function splitReverse(inputString) {
  const z = inputString.split(" ");
  let resultString = '';
  for (let i = z.length - 1; i >= 0; i--) {
    resultString += z[i] + " ";
  }
  return resultString;
}

const inputString = "Do or do not, there is no try."
const result = splitReverse(inputString);
console.log(result);