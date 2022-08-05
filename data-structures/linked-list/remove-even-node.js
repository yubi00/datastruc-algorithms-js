"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data));

    node = node.next;

    if (node != null) {
      ws.write(sep);
    }
  }
}

/*
 * Complete the 'deleteEven' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST listHead as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteEven(listHead) {
  // Write your code here
  //initialize current node starting from head
  let current = listHead.next;
  let prev = listHead;

  //loop through the linked list until the end
  while (current) {
    //if prev node is even
    if (prev.data % 2 === 0) {
      listHead = listHead.next;
    }
    let value = current.data;
    if (value % 2 === 0) {
      //delete that node if the value carried by that node is even
      if (current.next === null) {
        //set the previous node to null, if the last node is even
        prev.next = null;
      } else {
        prev.next = current.next;
      }
    } else {
      //set the previous node as the current node
      prev = current;
    }
    //set the current node as the next node of that current node
    current = current.next;
  }
  return listHead;
}
