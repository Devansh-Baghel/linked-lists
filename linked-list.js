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

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // pop() {
  //   let current = this.head;
  //   let lastNode;

  //   while (current) {
  //     lastNode = current;
  //     current = current.next;
  //   }

  //   lastNode = null;
  //   return lastNode
  // }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === value) {
        return index;
      }
      index++;
      current = current.next;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data;
      result += " -> ";
      current = current.next;
    }
    result += "null"
    return result;
  }
}

const l = new LinkedList();
// l.append(100);
// l.append(200);
// l.append(300);
// l.append(400);
// l.prepend(50);
// // l.pop();
// l.print();
export { l };
