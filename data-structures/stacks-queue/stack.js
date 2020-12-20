class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  pop() {
    if (this.size === 0) return null;

    let currFirstNode = this.first;
    if (this.size === 1) {
      this.last = null;
    } else {
      this.first = currFirstNode.next;
      currFirstNode.next = null;
    }
    this.size--;
    return currFirstNode;
  }
}

let stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();

console.log(stack);

//BIG O OF STACKS
// INSERTION : O(1)
//REMOVAL : O(1)
// SEARCHING : O(N)
// ACCESS: O(N)
