var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

var Node = function (val) {
    this.val = val;
    this.next = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (this.length === 0 || index < 0 || index >= this.length) return null;
    let val = this.head.val;
    let cur = this.head;

    for (let i = 0; i <= index; i++) {
        val = cur.val;
        cur = cur.next;
    }
    return val;
};

/**
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtHead = function (val) {
    // adding at the head or the shift method
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
    return newNode.val;
};

/**
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return newNode.val;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */

MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.length || index < 0) return null;
    if (index === 0) return this.addAtHead(val);
    let newNode = new Node(val);
    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }

    cur.next = newNode;
    newNode.next = cur.next;

    this.length++;
    return newNode.val;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.length) return null; // Check for invalid index

    let cur = this.head;

    // Deleting the first node (head)
    if (index === 0) {
        this.head = this.head.next; // Update the head to the next node

        // If the list is now empty, set the tail to null
        if (this.length === 1) {
            this.tail = null;
        }
    } else {
        let prev = null;
        // Traverse to the node just before the index
        for (let i = 0; i < index; i++) {
            prev = cur;
            cur = cur.next;
        }

        // Link the previous node to the next node, skipping the node at `index`
        prev.next = cur.next;

        // If we're deleting the last node, update the tail
        if (cur === this.tail) {
            this.tail = prev;
        }
    }

    this.length--;
    return cur.val; // Return the value of the deleted node
};

// Your MyLinkedList object will be instantiated and called as such:
let val = 12;
var obj = new MyLinkedList();
obj.addAtHead(100);
obj.addAtHead(10);
obj.addAtTail(50);
obj.addAtTail(30);
let param_2 = obj.addAtIndex(2, "rohit");

let param_3 = obj.deleteAtIndex(2);
var param_1 = obj.get(2);
console.log(param_1);
