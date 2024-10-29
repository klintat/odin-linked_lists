class Node {
    constructor() {
        this.value = null
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if(!this.head) {
            this.head = new Node();
            this.head.value = value;
        } else {
            const newNode = new Node();
            newNode.value = value;
            let temp = this.head;
            while (temp.nextNode) temp = temp.nextNode;
            temp.nextNode = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node();
		newNode.value = value;
		newNode.nextNode = this.head;
		this.head = newNode;
    }
}

