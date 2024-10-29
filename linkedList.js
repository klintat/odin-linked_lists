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

    toString() {
		if (this.head === null) return "( ) -> null";
		let finalString = "";
		let tempNode = this.head;
		while (tempNode.nextNode != null) {
			finalString += `( ${tempNode.value} ) -> `;
			tempNode = tempNode.nextNode;
		}
		finalString += `( ${tempNode.value} ) -> null`;
		return finalString;
	}

    get size() {
		let count = 0;
		let tempNode = this.head;
		while (tempNode) {
			count += 1;
			tempNode = tempNode.nextNode;
		}
		return count;
	}
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("mice");
list.append("parrot");
list.prepend("hamster");
// list.pop();
list.append("snake");
list.prepend("turtle");
list.append("spider");
console.log(list.toString());
console.log(list.find("spider"));
console.log(list.find("sss"));
console.log(list.find("parrot"));
console.log(list.find("turtle"));
// export { LinkedList };