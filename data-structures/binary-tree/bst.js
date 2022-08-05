class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.values = [];
  }

  insert(value) {
    let newNode = new Node(value);
    this.values.push(newNode.value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  Bfs() {
    let data = [];
    let queue = [];
    let node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  sum(root) {
    if (root === null) return 0;

    const queue = [root];
    let sum = 0;
    while (queue.length) {
      const current = queue.shift();
      sum += current.value;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return sum;
  }

  sumRecursive(root) {
    if (root === null) return 0;
    return (
      root.value + this.sumRecursive(root.left) + this.sumRecursive(root.right)
    );
  }
  //root-left-right
  DfsPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  //left-right-root
  DfsPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  // dfs recursive
  DfsRecursive(node) {
    if (node === null) return [];
    const leftValues = this.DfsRecursive(node.left);
    const rightValues = this.DfsRecursive(node.right);
    return [node.value, ...leftValues, ...rightValues];
  }

  //dfs iterative using stack
  DfsIterative(root) {
    let result = [];
    let stack = [root];

    while (stack.length) {
      const current = stack.pop();
      result.push(current.value);
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
    return result;
  }

  // left-root-right
  DfsInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  min(root) {
    if (root === null) return 0;
    let current = root;

    while (current.left) {
      current = current.left;
    }

    return current.value;
  }

  minRecursive(root) {
    if (root === null) return Infinity;
    return Math.min(
      root.value,
      this.minRecursive(root.left),
      this.minRecursive(root.right)
    );
  }

  max(root) {
    if (root === null) return 0;
    let current = root;

    while (current.right) {
      current = current.right;
    }

    return current.value;
  }
}

let bst = new BinarySearchTree();

bst.insert(20);
bst.insert(17);
bst.insert(15);
bst.insert(18);
bst.insert(25);
bst.insert(50);
bst.insert(22);

//     20
//     / \
//   17    25
//   / \   /  \
// 15   18 22  50

const dfsRecursive = bst.DfsRecursive(bst.root);
console.log(dfsRecursive);
// [20, 17, 15, 18, 25, 22, 50]; // DfsPreOrder

const dfsItertive = bst.DfsIterative(bst.root);
console.log(dfsItertive);

console.log('sum: ', bst.sumRecursive(bst.root));
console.log('min: ', bst.minRecursive(bst.root));
console.log('max: ', bst.max(bst.root));

//BIG O

// INSERTION = O(logN)
// SEARCHING - O(logN)
