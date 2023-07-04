function Node(data = null, next = null) {
  return {
    data: data,
    next: next,
  };
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    this.head = Node(value, this.head);
    this.size++;
  }

  append(value) {
    const node = Node(value);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  getSize() {
    return this.size;
  }

  // get head lol ??? 🤨
  getHead() {
    return this.head.data;
  }

  getTail() {
    let current = this.head;
    let tail;

    while (current) {
      tail = current;
      current = current.next;
    }

    return tail.data;
  }

  at(index) {
    let counter = 0;
    let current = this.head;

    while (counter < index) {
      current = current.next;
      counter++;
    }

    return current.data;
  }
}

const l = new LinkedList();

export { l };
