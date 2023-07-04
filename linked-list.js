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
    console.log(this.size);
  }
}

const l = new LinkedList();
l.prepend(100);
l.prepend(200);
l.prepend(300);
l.append(400);
l.print();
l.getSize();

