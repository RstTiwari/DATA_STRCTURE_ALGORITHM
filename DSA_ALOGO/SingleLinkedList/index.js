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
        if (this.length > 0) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
}

let singleList = new SingleLinkedList();
singleList.push("Rohit");
singleList.push("Tiwari");
singleList.push("story");
singleList.push("story1");

console.log(singleList.head.next.next, "===");
