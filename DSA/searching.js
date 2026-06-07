function search(head, value){
let current = head;

while(current !== value){

    if(current.data === value){
        return true;
    }
    current = current.next;
}
return false;
}