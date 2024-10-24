/**
 * @class Node for storing the Node Value;
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @class SingleLinked List
   @param null
   @method push
   @method pop
   @method set
 */

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Push method for inserting values in singleLinkedList
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let curHead = this.head;
            this.head = newNode;
            this.head.next = curHead;
        }
        this.length++;
        return this;
    }
    unshift(){
       if(!this.head){
         return undefined
       }else{
       
       }
    }
    transverse() {
        let current = this.head;
        while (current.next) {
            let prv = current;
            current = current.next;
            console.log(prv);
        }
    }
}


let singleList = new SingleLinkedList();
let first = singleList.shift("Rohit");
let second = singleList.shift("Tiwari");
let third = singleList.shift("story");
console.log( "===",singleList);
