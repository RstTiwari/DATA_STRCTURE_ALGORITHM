/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.first = null;
    this.last = null;
    this.length = 0;
    this.maxSize = maxSize;
};

var Node = function (val) {
    this.val = val;
    this.next = null;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.length < this.maxSize - 1) {
        let newNode = new Node(x);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let tem = this.first;
            this.first = newNode;
            this.first.next = tem;
        }
        this.length++;
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (!this.first) return -1;
    let tem = this.first;
    this.first = tem.next;
    if (this.length === 1) {
        this.first = null;
        this.last = null;
    }
    this.length--;
    return tem.val;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    if (k >= this.length || k < this.length) return null;
    let i = 0;
    let cur = this.first;
    console.log(k);
    while (i < k - 1) {
        console.log(cur, "===");
        cur.val += val;
        cur = cur.next;
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

var obj = new CustomStack(4);

obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);

obj.increment(3, 100);
