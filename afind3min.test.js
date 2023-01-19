function find3min(x, y, z) {
  const result = Math.min(x, y, z);
  return result;
}

//hello.js
//hello.test.js

// 5-10 tests
// function testxx() {
//}

// function name
// test1. etc

function testMinOfZeros() {
  const result = find3min(0,0,0);
  const expected = 0;
  console.log(result === expected) 
}

function testMinOfOneTwoThree() {
  const result = find3min(1,2,3);
  const expected = 1;
  console.log(result === expected) 
}

function testMinOfNegNum(){
  const result = find3min(-1,-9, -11);
  const expected = -11;
  console.log(result === expected) 
}

function testLargeNum(){
  const result = find3min(10010, 133, 0);
  const expected = 0;
  console.log(result === expected)
}

function testThreeNum(){
  const result = find3min(1,3,-10301);
  const expected = -10301;
  console.log(result === expected)
}

console.log('find3min')
testMinOfZeros()
testMinOfOneTwoThree()
testMinOfNegNum()
testLargeNum()
testThreeNum()
