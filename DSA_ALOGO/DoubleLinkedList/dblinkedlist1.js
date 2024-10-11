// let work on  building the next level

function Node(val) {
    this.val = val;
    this.next = null;
    this.pre = null;
}

function DBLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DBLinkedList.prototype.push = function (val) {
    let newNode = new Node(val);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.pre = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return this;
};

DBLinkedList.prototype.pop = function () {
    if (this.length === 0) return null;
    let poppedValue = this.tail.val;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    }
    this.tail = this.tail.pre;
    this.tail.next = null;
    this.length--;
    return poppedValue;
};

/**
@param index num
*/

DBLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.length || this.length === 0) return null;
    let i = 0;
    let cur = this.head;
    while (i < index) {
        cur = cur.next;
        i++;
    }
    return cur.val;
};

/**
 *
 * @param {Number} val
 * @param {Number} index
 */

DBLinkedList.prototype.set = function (index, val) {
    if (index < 0 || index >= this.length || this.length === 0) return null;
    // get the value at the given index point
    let i = 0;
    let cur = this.head;
    while (i < index) {
        cur = cur.next;
        i++;
    }
    cur.val = val;
    return cur;
};

/*
 * @param {Number} index
 */


DBLinkedList.prototype.deleteAt = function (index) {
    if (index < 0 || index >= this.length || this.length === 0) return null;
    let i = 0;
    let cur = this.head;
    while (i < index) {
        cur = cur.next;
        i++;
    }
    let pre = cur.pre;
    pre.next = cur.next
    
};

let obj = new DBLinkedList();

obj.push(10);
obj.push(11);
obj.push(12);
obj.push(13);
obj.push(14);


let value = obj.set(3, 15);
obj.deleteAt(2);
let value2 = obj.get(2);

console.log(value2,obj);
