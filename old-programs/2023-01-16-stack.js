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
    const topOfStack = this.items[-1];
    return topOfStack;
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

theStack = new Stack();
theStack.push(10);
theStack.push(25);
theStack.push(99);
console.log(theStack);
theStack.pop();
console.log(theStack);
theStack.top(); // 25
theStack.pop();
theStack.pop();
console.log(theStack.isEmpty()); //false