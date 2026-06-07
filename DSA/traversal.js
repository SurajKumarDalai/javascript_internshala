class Node {

    // creates a blueprint for a node.
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// These are 3 separate nodes.
let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);

// To make a Linked List
node1.next = node2;
node2.next = node3;

let current = node1;

while(current !== null){
    console.log(current.data);
    current = current.next;
}