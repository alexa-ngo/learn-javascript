function find3max(x, y, z) {
  const result = Math.max(x, y, z);
  return result;
}

//hello.js
//hello.test.js

function testMinOfZeros() {
  const result = find3max(0,0,0);
  const expected = 0;
  console.log(result === expected) 
}

function testMinOfOneTwoThree() {
  const result = find3max(1,2,3);
  const expected = 3;
  console.log(result === expected) 
}

function testMinOfNegNum(){
  const result = find3max(-1,-9, -11);
  const expected = -1;
  console.log(result === expected) 
}

function testLargeNum(){
  const result = find3max(10010, 133, 0);
  const expected = 10010;
  console.log(result === expected)
}

function testThreeNum(){
  const result = find3max(1,3,-10301);
  const expected = 3;
  console.log(result === expected)
}

console.log('find3max')
testMinOfZeros()
testMinOfOneTwoThree()
testMinOfNegNum()
testLargeNum()
testThreeNum()
