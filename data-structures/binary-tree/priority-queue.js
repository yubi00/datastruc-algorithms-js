class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.sort();
  }

  dequeue() {
    this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let pq = new PriorityQueue();
pq.enqueue("get a job", 1);
pq.enqueue("finish algo course", 3);
pq.enqueue("apply for job", 2);
pq.dequeue();
console.log(pq.values);
