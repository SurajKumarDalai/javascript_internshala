// 1. Define the Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 2. Your search function (Fixed)
function search(head, value) {
    let current = head;

    // Check if the list is empty
    if (current === null) {
        return false; 
    }

    // Traverse the list safely
    while (current !== null) {
        if (current.data === value) {
            return true; // Value found
        }
        current = current.next; // Move to the next node
    }
    
    return false; // Reached the end without finding the value
}

// --- Example Usage ---

// Let's create a linked list: 10 -> 20 -> 30
let headNode = new Node(10);
headNode.next = new Node(20);
headNode.next.next = new Node(30);

// Call the function correctly
console.log(search(headNode, 20)); // Output: true
console.log(search(headNode, 99)); // Output: false
