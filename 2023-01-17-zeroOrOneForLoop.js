function zeroOrOneLoop(inputArray){
  const resultArray = [];
  for(let i = 0; i < inputArray.length; i++){
    if (inputArray[i] %2 === 0) {
      resultArray.push(1);
    } else {
      resultArray.push(0);
    }
  }
  return resultArray;
}

console.log(zeroOrOneLoop([12,7,8,900,0])) //1,0,1,1,1
console.log(zeroOrOneLoop([])); //[]
console.log(zeroOrOneLoop([1,1,1,1,1])) // 0,0,0,0,0