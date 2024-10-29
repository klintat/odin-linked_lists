import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("mice");
list.append("parrot");
list.prepend("hamster");
list.pop();
list.append("snake");
list.prepend("turtle");
list.append("spider");
console.log(list.toString());
console.log(list.find("spider"));
console.log(list.find("sss"));
console.log(list.find("parrot"));
console.log(list.find("turtle"));