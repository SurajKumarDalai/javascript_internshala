class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){

        let newNode = new Node (data);

        if(this.head === null){
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
    }

    deleteEnd(){

        if(this.head === null){
            return;
        }

        if(this.head.next === null){
            this.head = null;
            return;
        }

        let current = this.head;

        while(current.next.next !== null){
            current = current.next;
        }
        current.next = null;
    }
}