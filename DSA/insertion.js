// Create a blueprint for a node.
class Node {
    constructor(data) {     //When someone creates a new node, they must provide data.
        this.data = data;   //Store the value inside the node.
        this.next = null;   //Currently this node is not connected to any other node.
    }
}

class LinkedList {             // Create a blueprint for a Linked List.
    constructor() {                 
        this.head = null;      // Initially the list is empty.
    }

    prepend(data) {                         // Insert a node at the beginning.
        let newNode = new Node(data);       // Create New Node

        newNode.next = this.head;           // Connect New Node to Old Head

        this.head = newNode;                // Move Head
    }
}
