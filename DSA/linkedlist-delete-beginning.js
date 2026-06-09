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

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    deleteBeginning() {

        // Empty list
        if (this.head === null) {
            return;
        }

        // Move head to next node
        this.head = this.head.next;
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

console.log("Before Deletion:");
list.print();

list.deleteBeginning();

console.log("After Deletion:");
list.print();
