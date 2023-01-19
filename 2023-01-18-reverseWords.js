function reverseWords(inputString) {
  const resultArray = inputString.split(" ");
  let result = "";
  for(let i=resultArray.length-1; i>=0; i--){
    result += resultArray[i] + " ";
  }
  return result;
}

console.log(reverseWords('Do or do not, there is no try.'));