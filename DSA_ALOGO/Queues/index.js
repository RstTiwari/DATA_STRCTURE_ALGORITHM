class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queues {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    queue(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let tem = this.last;
            tem.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
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
        return null;
    }
}

let Obj = new Queues();
Obj.queue("Rohit");
Obj.queue("Kumar");
Obj.queue("Tiwari");
let removed = Obj.dequeue()
Obj.dequeue()

console.log(removed, "obj", Obj);
