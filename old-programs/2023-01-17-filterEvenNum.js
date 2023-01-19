function filterEvenNum(inputArray) {
  const result = inputArray.filter(item => item %2 === 0);
  return result;
}

console.log(filterEvenNum([1,2,4,6,8,0,10,11]));

