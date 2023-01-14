function findMax(val1, val2, val3) {
  const comparison = Math.max(val1, val2);
  const comparison2 = Math.max(val3, comparison);
  return comparison2;
}

const val1 = 5;
const val2 = 7; 
const val3 = 9;
const result = findMax(val1, val2, val3); 
console.log(result);