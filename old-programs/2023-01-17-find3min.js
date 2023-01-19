function find3min(x, y, z) {
  const result = Math.min(x, y, z);
  return result;
}

console.log(find3min(1,5,7));


// function add(x, y) {
//   return x + y;
// }

// function testAddZeros() {
//   const result = add(0,0);
//   const expected = 0;
//   console.log(result === expected) // true
// }

// function testAddTwoNums() {
//   const result = add(2,3);
//   const expected = 5;
//   console.log(result === expected) 
// }

function testMinOfZeros() {
  const result = find3min(0,0,0);
  const expected = 0;
  console.log(result === expected) // 0
}