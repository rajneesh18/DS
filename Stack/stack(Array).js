class Stack {
    constructor() {
        this.top = -1;      // The top of the stack
        this.stack = [];    // Array representation of the stack
    }

    // Function to insert item at the end of the stack
    push = (value) => { this.stack[++this.top] = value; }

    // Function to remove item at the end of the statck and returns the removed value
    pop = () => {
        if(top == -1) { return null; }
        let removed = this.stack[this.top--];
        this.stack.pop();
        
        return removed;
    }

    // Function to get the top most item of the stack
    peek = () => { return this.stack[this.top]; }

    // Function to show the stack
    show = () => { return this.stack.toString(); }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(5);
myStack.push(76);
myStack.push(69);

myStack.show();
myStack.pop();
myStack.pop();

myStack.show();
console.log(myStack.peek());
