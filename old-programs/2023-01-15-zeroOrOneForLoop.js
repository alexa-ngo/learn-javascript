function zeroOrOneForLoop(inputArray) {
  const newArray = [];
  for (let i = 0; i <inputArray.length; i++) {
    if (inputArray[i] % 2 === 0) {
      newArray.push(1);
    } else {
      newArray.push(0);
    }
  }
  return newArray;
}


console.log(zeroOrOneForLoop([2, 99,101,-1,2])) // 0,1,1,0,0,0,1