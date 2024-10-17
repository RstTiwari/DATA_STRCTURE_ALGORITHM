/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
       this.first = null
       this.last = null
       this.length = 0
       this.maxSize = maxSize
};

var Node = function (val){
    this.val  = val
    this.next = null 
}

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.length < this.maxSize) {
        let newNode = new Node(x);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (!this.first) return -1
    let tem = this.last
    this.first = tem.next   
    this.length --
    return tem.val
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    let limit = Math.min(k, this.length) 
    let cur = this.first;
    let i = this.length
    console.log(limit,i)
    while (i >  limit && cur) {
        cur.val += val;
        cur = cur.next;
        i--
    }
    console.log(JSON.stringify(this.first))

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
console.log(JSON.stringify(obj), "before increment");

obj.increment(5, 100);
console.log(JSON.stringify(obj), "after first increment");
obj.increment(2, 100);
console.log(JSON.stringify(obj), "after second increment");

let push1 = obj.pop();
let push2 = obj.pop();
console.log(JSON.stringify(obj), "after pop");
