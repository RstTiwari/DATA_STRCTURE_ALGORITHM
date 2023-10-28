class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.pre = null;
    }
}

class DobulesLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        /**
         * if there is now this.head create the first node
         *else 
           find the oldTail node
          create a newNode and make it tail
          now make new of oldTail to the newNode
          now direct pre of newNode to the oldTail
         */
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }
    pop() {
        /*
        
         * Get the oldTail
         * now get the pre value of oldTail
         * set the pre value as tail
         * if(length ===0) make both head and tail as null
         *
         */
        let currentTail = this.tail;
        let pre = currentTail.pre;
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentTail;
    }
    shift() {
        let currentHead = this.head;
        let next = currentHead.next;
        this.head = next;
        this.head.pre = null;
        this.length--;
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val)
        let currentHead = this.head;
        


    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr
    }
}

let first = new DobulesLinkedList()
first.push(100)
first.push(200)
first.push(300)
first.push(400)
console.log(first.print())



