function evenNum(inputArray) {
  const result = inputArray.filter(x => x % 2 === 0);
  return result;
}

console.log(evenNum([1,2,3,4,5,8,88]));
