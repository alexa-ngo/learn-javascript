function findMin(x, y, z) {
  const result = Math.min(x, y, z);
  return result;
}

const x = 5;
const y = 9; 
const z = 16;
const result = findMin(x, y, z);
console.log(result);