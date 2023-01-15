function reverseString(inputString) {
  let resultString = "";
  const newString = inputString.split(" ");
  for (let i = newString.length -1 ; i >=0; i--) {
    resultString += newString[i] + " ";
  }
  return resultString;
}

const inputString = "Do or do not, there is no try.";
const result = reverseString(inputString);
console.log(result);