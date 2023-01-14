function reverseString(inputString) {
  let resultString = "";
  const splitString = inputString.split(" ");
  for (let i = splitString.length -1 ; i >=0; i--) {
    resultString += splitString[i] + " ";
  }
  return resultString;
}

const inputString = "Do or do not, there is no try.";
const z = reverseString(inputString);
console.log(z);