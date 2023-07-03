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
}

const l = new LinkedList();
l.prepend("hits");
l.prepend("new");
l.prepend("mlac");
console.log(l);
