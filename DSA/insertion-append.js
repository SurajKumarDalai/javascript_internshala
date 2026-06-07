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

            let newNode = new Node(data);
            let current = this.head;

            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
}

