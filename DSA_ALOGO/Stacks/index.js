function Node(val) {
    this.val = val;
    this.next = null;
}

function Stack() {
    this.first = null;
    this.last = null;
    this.length = 0;
}

Stack.prototype.push = function (val) {
    let newNode = new Node(val);
    if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
    } else {
        let tem = this.first;
        this.first = newNode;
        this.first.next = tem;
    }
    this.length++;
};

Stack.prototype.pop = function () {
    if (this.first) {
        let tem = this.first;
        this.first = tem.next;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        }

        this.length--;
        return tem.val;
    }
};

let stack = new Stack()
stack.push("Start learning")
stack.push("then practice the old questions")
stack.push("Revise practice the old questions")
stack.push("Still the last line in the quew")
let last = stack.pop()
 stack.pop()
 stack.pop()
console.log(stack)
console.log(last)
