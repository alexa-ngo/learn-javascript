function filterEvenNum(inputArray) {
  const result = inputArray.filter (item => item % 2 == 0);
  return result;
}

console.log(filterEvenNum([1,4,6,8,10,11,12])); //4,6,8,10,12