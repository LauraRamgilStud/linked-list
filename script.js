"use-strict";

class Node {
  constructor(payload) {
    this.payload = payload;
    this.next = null;
    this.prev = null;
  }
}

const n1 = new Node(100);
console.log(n1);

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // insert first node
  addFirst(payload) {
    const newNode = new Node(payload);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  // insert last node
  add(payload) {
    const newNode = new Node(payload);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  // insert at index
  addAtIndex(payload, index) {
    //If out of bounds, add to last
    if (index > 0 && index > this.size) {
      this.add(payload);
      return;
    }

    // If first index
    if (index === 0) {
      this.addFirst(payload);
      return;
    }

    const node = new Node(payload);
    let current, prev;

    // set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      prev = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    node.prev = prev;
    prev.next = node;
    current.prev = node;

    this.size++;
  }

  // get at index
  getAt(index) {
    /* //If out of bounds, return last
    if (index > 0 && index > this.size) {
      this.add(payload);
      return;
    } */

    let current = this.head;
    let count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // remove at index
  removeAt(index) {
    // If out of bounds remove tail
    if (index > 0 && index > this.size) {
      this.removeTail();
      return;
    }

    let current = this.head;
    let prev;
    let count = 0;

    //Remove first
    if (index === 0) {
      this.removeHead();
    } else {
      while (count < index) {
        count++;
        prev = current;
        current = current.next;
      }

      prev.next = current.next;
      current.next.prev = prev;
    }
    this.size--;
  }

  // clear list
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // print list data
  print() {
    let current = this.head;
    while (current) {
      console.log(`
      -------------------------
      Payload: ${current.payload}
      Prev: ${current.prev?.payload}
      Next: ${current.next?.payload}
      --------------------------

      `);
      current = current.next;
    }
  }

  // get index by payload
  indexOf(payload) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.payload === payload) {
        return index;
      }
      current = current.next;
      index++;
    }
    return;
  }

  // insert after index
  //TODO
  insertAfter(index, payload) {
    this.addAtIndex(payload, index + 1);

    this.size++;
  }

  // insertBefore index
  //TODO
  insertBefore(index, payload) {
    this.addAtIndex(payload, index - 1);

    this.size++;
  }

  // get first element
  head() {
    return this.head;
  }

  // get last element
  tail() {
    return this.tail;
  }

  // remove first element
  removeHead() {
    if (this.head) {
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
    }
  }

  // remove last element
  removeTail() {
    if (this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
    }
  }
}

const ll = new LinkedList();
ll.add(200);
ll.add(300);
ll.add(400);
ll.addFirst(100);
