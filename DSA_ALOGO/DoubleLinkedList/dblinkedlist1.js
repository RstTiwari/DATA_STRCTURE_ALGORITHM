var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.length = 0;
};


var Node = function (val) {
    this.val = val;
    this.next = null;
    this.pre = null;
};


/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.length || this.length === 0) return -1;
    let i = 0;
    let cur = this.head;
    while (i < index) {
        cur = cur.next;
        i++;
    }
    return cur.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.pre = newNode;
        this.head = newNode;
    }
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
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
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.length) return;
    
    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    if (index === this.length) {
        this.addAtTail(val);
        return;
    }

    let i = 0;
    let newNode = new Node(val);
    let cur = this.head;
    
    // Traverse to the node before the target index
    while (i < index - 1) {
        cur = cur.next;
        i++;
    }

    newNode.next = cur.next;
    cur.next.pre = newNode;
    cur.next = newNode;
    newNode.pre = cur;

    this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) {
        let oldHead = this.head;
        this.head = oldHead.next;
        if (this.head) {
            this.head.pre = null;
        } else {
            this.tail = null;
        }
        this.length--;
        return;
    }

    if (index === this.length - 1) {
        let oldTail = this.tail;
        this.tail = oldTail.pre;
        if (this.tail) {
            this.tail.next = null;
        }
        this.length--;
        return;
    }

    let i = 0;
    let cur = this.head;
    while (i < index) {
        cur = cur.next;
        i++;
    }

    let pre = cur.pre;
    let next = cur.next;
    pre.next = next;
    if (next) {
        next.pre = pre;
    }
    this.length--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
