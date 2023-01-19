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
    return this.items.pop();
  }

  top()
  {
    const topOfStack = this.items.length;
    return this.items[topOfStack-1];
  }


  isEmpty()
  {
    if (this.items === 0){
      return true;
    } else {
      return false;
    }
  }
}

alexaStack = new Stack();
alexaStack.push(5);
alexaStack.push(35);
//console.log(alexaStack);
alexaStack.pop();
//console.log(alexaStack);
alexaStack.push(99);
alexaStack.push(75);
//console.log(alexaStack);
console.log(alexaStack.top());

function countSeq(n) {
  const charStack = new Stack();
  let currSeq = '1';

  for(let index = 1; index < n; index++){
    let result = "";
    let count = 0;

    for (let i = 0; i < currSeq.length; i++){
      if (charStack.isEmpty() === false && charStack.top() !== currSeq[i]){
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
    if (charStack.isEmpty()===false) {
      topOfEndingStack = charStack.top();
      while(charStack.isEmpty() === false) {
        charStack.pop();
        count += 1;
      }
      result = result + `${count}` + topOfEndingStack;
    }
    currSeq = result;
  }
  return currSeq;
}
alexaStack = new Stack();
console.log(countSeq(5)); // 37218
