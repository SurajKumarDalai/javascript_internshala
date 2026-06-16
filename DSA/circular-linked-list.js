class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList{
    constructor(){
        this.head = null;
    }

    append(data){

        let newNode = new Node(data);

        // Empty list
        if(this.head === null){
        this.head = newNode;
        newNode.next = this.head;
        return;
        }
    
    let current = this.head;

    // find last Node
    while(current.next !== this.head){
        current = current.next;
    }
    // Connect new Node
    current.next = newNode;

    // Make new node point to head
    newNode.next = this.head;
}

print(){

    if(this.head === null){
        return;
    }
    let current = this.head;

    do{
        console.log(current.data);
        current = current.next;

    }
    while(current !== this.head);
}
}
// Example
let list = new CircularLinkedList();

list.append(10);
list.append(20);
list.append(30);

list.print();