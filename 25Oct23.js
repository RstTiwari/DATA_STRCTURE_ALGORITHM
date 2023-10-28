// Single Linked List Priactise

class Node {
    constructor(val) {
        this.task = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.head){
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
        // check length if no node return undefined
        if (!this.head) {
            return undefined;
        }

        //loop throgh untill last you reach to tail
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

    shift() {
        if (!this.head) return false;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(task, des) {
        if (!task || !des) return "Please provide task and Description";
        let newNode = new node(task, des);
        let current = this.head;
        this.head = newNode;
        newNode.next = current;
        return true;
    }
    set(task, des, ind) {
        if (ind < 0 || ind > this.length) return false;
    }
    get(ind) {
        /**
        if ind is less than zero or greter than this.length return null
        if(ind equals to zero call this.shfit)
        if(ind equal to this.length -1) return pop method
        else call reach till the ndoe through while loop get that vlaue

     */
    }
    remove(ind) {
        /*
     if  index is less than zero or greater than this.length return null
      if index is 0 use our shit method
     if index equals to this.length - 1 use our pop method
     else  call get Value and get node
     set prev node.next to the next node.
     decrement the length by 1 
     return the node
     */
        if (ind < 0 || ind > this.length) {
            return null;
        }
        if (ind === 0) {
            return this.shift();
        }
        if (ind === this.length - 1) {
            return this.pop();
        }
        let prevNode = this.get(ind - 1);
        let returnNode = prevNode.next;
        preValue.next = returnNode.next;
        this.length--;
        return returnNode;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.task);
            current = current.next;
        }
        console.log(arr,"arr");
    }
    reverse() {
        //keep current node = this.head
        // now chgange the head with tail
        // now make tail as nrew preValuenow update the vlaue
        let currentNode = this.head ;
        let next ;
        let pre = null
        this.head = this.tail
        this.tail = currentNode
        for (let index = 0; index < this.length; index++) {
             next = currentNode.next
             currentNode.next = pre
             pre = currentNode
             currentNode = next            
        }
        return this
  
       
    }
}


let list = new SingleLinkedList()
list.push(1)
list.push(2 )
list.push(200)
list.push(400)


console.log(list.reverse())
console.log(list.print())
 


