class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    //swap first value with the last one
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const elem = this.values[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > elem) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > elem) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      //swap
      this.values[index] = this.values[swap];
      this.values[swap] = elem;
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

heap.extractMax();
console.log(heap.values);
