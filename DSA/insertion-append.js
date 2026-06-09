class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {

        let newNode = new Node(data);

        // If list is empty
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        // Traverse to last node
        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        // Attach new node
        current.next = newNode;
    }

    print() {
        let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example
let list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.print();
