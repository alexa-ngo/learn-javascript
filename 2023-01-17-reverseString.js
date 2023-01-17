function reverseString(inputString) {
  const workingString = inputString.split(" ");
  let result = "";
  for (let i = workingString.length-1; i >=0; i--) {
    result += workingString[i] + " ";
  }
  return result;
}

console.log(reverseString("Do or do not, there is no try."));