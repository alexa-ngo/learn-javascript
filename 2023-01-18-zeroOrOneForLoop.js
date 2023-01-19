function zeroOrOneFOrLoop(inputArray) {
  const resultArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if(inputArray[i] % 2 === 0){
      resultArray.push(1);
    } else {
      resultArray.push(0);
    }
  }
  return resultArray;
}

console.log(zeroOrOneFOrLoop([1,4,5,66,2,1,50,89,99,22])); //0,1,0,1,1,`0,1,0,0,1`