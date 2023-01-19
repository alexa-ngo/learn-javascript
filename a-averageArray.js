function averageArray(inputArray) {
  let sum = 0;
  if (inputArray.length == 0) {
    return true;
  }
  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum /inputArray.length;
}


// function test() {
//   const result = 
//   const expected = 
//   console.log(result === expected);
// }

console.log('averageArray:');
testAllZeros()
testNegNumbers()
testNoValues()
testPosValues()
testMixedValues()


function testAllZeros() {
  const result = averageArray([0,0,0]);
  const expected = 0;
  console.log(result === expected);
}

function testNegNumbers() {
  const result = averageArray([-4,-7, -10]);
  const expected = -7;
  console.log(result === expected);
}

function testNoValues() {
  const result = averageArray([]);
  const expected = true;
  console.log(result === expected);
}

function testPosValues() {
  const result = averageArray([20, 40, 80, 100, 60]);
  const expected = 60;
  console.log(result === expected);
}

function testMixedValues() {
  const result = averageArray([1,5,8,-140,100, 99900, 123, 543542]);
  const expected = 80442.375
  console.log(result === expected);
}

//hello.js
//hello.test.js

// 5-10 tests
// function testMinOfZeros() {
//   const result = find3max(0,0,0);
//   const expected = 0;
//   console.log(result === expected) 
// }

// function name
// test1. etc

