//Singly Linked Lists

class node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class sll {
    constructor(head=null){
        this.head = head;
    }
    push(data){
        if(this.head==null){
            this.head = new Node(data);
            return;
        }
        else{
            let pointer = this.head;
            while(pointer.next != null){
                pointer = pointer.next;
            }
            pointer.next = new Node(data);
            return;
        }
    }
    pop(){
        if(this.head = null){
            return null;
        }
        else if(this.head.next == null){
            let temp = this.head.data;
            this.head = null;
            return temp;
        }
        else{
            let pointer = this.head;
            while(pointer.next != null){
                pointer = pointer.next
            }
            let temp = pointer.next.data;
            pointer.next = null;
            return temp;
        }
    }

    log(){
        if(this.head == null){
            console.log(null)
        }
        else{
            console.log("*** Start of List ***")
            let pointer = this.head;
            while(pointer != null){
                console.log(pointer.data);
                pointer = pointer.next;
            }
            console.log("*** End of List ***")
        }
    }

    
}

