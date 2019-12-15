/** Node Class */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/** Stack Class */
class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Function to check stack is empty or not
  isEmpty = () => { return (this.head) ? false : true; }

  // Function to insert item at the end of the stack
  push = (data) => {
      let newNode = new Node(data);

      if(!this.isEmpty())
        newNode.next = this.head;
      this.head = newNode;
      this.size++;
  } 

  // Function to remove item at the end of the stack and returns the removed value
  pop = () => {
    if(this.isEmpty()) { return "Stack is empty"; }
    this.size--;
    let result = this.head.data;
    this.head = this.head.next;

    return result;
  }

  // Function to get the top most item of the stack
  peek = () => {
    if(this.isEmpty()) { return "Stack is empty"; }
    return this.head.data;
  }

  // Function to show the stack
  show = () => {
    if(this.isEmpty()) return "Stack is empty";
    let current = this.head;
    let str = "[ ";
    str += current.data;
    while(current.next != null) {
        current = current.next;
        str += `, ${current.data}`;
    }
    str += " ]";
    return str;
  }
}

let myStack = new Stack();
myStack.push(2);
myStack.push(6);
myStack.push(3);
myStack.push(9);
myStack.push(1);
console.log(myStack.show());

myStack.pop();
myStack.pop();
console.log(myStack.show());
console.log(myStack.peek());
