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

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const l = new LinkedList();
l.prepend("hits");
l.prepend("new");
l.prepend("mlac");
l.print();
// console.log(l);
