class Stack {

  constructor()
  {
    this.items = [];
  }

  push(element)
  {
    this.items.push(element);
  }

  pop()
  {
    const poppedItem = this.items.pop();
    return poppedItem;
  }

  top()
  {
    const topOfStack = this.items.length;
    return this.items[topOfStack-1];
  }

  isEmpty()
  {
    if (this.items.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}



function countSeq(n) {
  let charStack = new Stack();
  let currSeq = "1";

  for (let index = 1; index < n; index++) {

    let count = 0;
    let result = "";

    for (let i = 0; i < currSeq.length; i++) {
      if (charStack.isEmpty() === false && currSeq[i] !== charStack.top()){
        while (charStack.isEmpty() === false){
          workingChar = charStack.top();
          charStack.pop();
          count += 1;
        }
        result = result + `${count}` + workingChar;
        count = 0;
      }
      charStack.push(currSeq[i]);
    }

    if (charStack.isEmpty() === false) {
      topOfEndingStack = charStack.top();
      while (charStack.isEmpty() === false) {
        charStack.pop();
        count += 1;
      }
      result = result + `${count}` + topOfEndingStack;
    }
    currSeq = result;
  }
  return currSeq;
}



console.log('CountSeq Tests:');
testTop()
testOne()
testTwo()
testThree()
testFive()



function testTop() {
  theStack = new Stack();
  theStack.push(5);
  theStack.push(99);
  theStack.push(81);
  theStack.pop();
  const result = theStack.top();
  const expected = 99;
  console.log(result === expected);
}

function testOne() {
  const result = countSeq(1);
  const expected = '1';
  console.log(result === expected);
}

function testTwo() {
  const result = countSeq(2);
  const expected = '11';
  console.log(result === expected);
}

function testThree() {
  const result = countSeq(3);
  const expected = '21';
  console.log(result === expected);
}

function testFour() {
  const result = countSeq(4);
  const expected = '1211';
  console.log('4')
  console.log(result);
}

function testFive() {
  const result = countSeq(5);
  const expected = '111221';
  console.log(result === expected);
}
