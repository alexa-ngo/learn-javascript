function reverseArrayNum(inputArray) {
  const newArray = [];
  for(let i = inputArray.length -1; i >=0; i--) {
    newArray.push(inputArray[i]);
  }
  return newArray;
}

console.log(reverseArrayNum([-10, -9, -99]));