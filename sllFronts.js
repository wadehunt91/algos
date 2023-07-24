class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    
    addFront(value){
        let newNode= new Node(value);
        if(!this.head){
            this.head=newNode;
            console.log(this)
            return this;
        }
        else{
        newNode.next = this.head;
        this.head = newNode;
        }
        console.log(this)
        return this;
    }

    removeFront(){
        if(!this.head){
            return null;
        }
        else if(!this.head.next){
            let temp = this.head.data;
            this.head = null;
            return temp;
        }
        else{
            let pointer = this.head;
            while(pointer.next){
                pointer = pointer.next
            }
            let temp = pointer.next.data;
            pointer.next = null;
            return temp;
        }
    }
}

let sll = new SLL();
sll.addFront(3);
sll.addFront(4);
sll.addFront(5);
sll.removeFront();