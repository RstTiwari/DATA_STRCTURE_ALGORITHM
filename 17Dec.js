/**
 * Practising the Binaery Search Tree
 */

class Node {
    constructor(value) {
        (this.value = value), (this.left = null);
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (current.value === value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return current;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return current;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        if (!this.root) return undefined;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return "value not Found";
        return current;
    }
}



newTree.insert(12);
newTree.insert(10);
newTree.insert(8);
newTree.insert(18);
newTree.insert(81);
console.log(newTree.find(18))





