class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
    }

    append(data){

        let newNode = new Node(data);

        // Empty List
        if(this.head === null){
            this.head = newNode;
            return;
        }
        let current = this.head;

        // Move to last node
        while(current.next !== null){
            current = current.next;
        }

        // Connect both directions
        current.next = newNode;
        newNode.prev = current;
    }

    printForward(){

        let current = this.head;

        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }
}

class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
    let newNode = new Node(data);

    if (this.head === null){
        this.head = newNode;
        return;
    }

    let current = this.head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
    newNode.prev = current; 
    }
}