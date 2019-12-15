/**
 * Queue: It is a linear data structure that follows a particlar order
 * in which the operations are performed.
 * The order is in FIFO (First In First Out) 
 */

class Queue {
    constructor() {
        this.items = [];    // Array representation of the queue
    }

    // Function to check queue is empty or not
    isEmpty = () => {
        // Return true if the queue is empty
        return this.items.length == 0;
    } 

    // Function to print queue
    show = () => {
        let str = "";
        str = this.items.toString();
        return str;
    }

    // Add an element in the queue
    enqueue = (data) => {
        if(!data) return "Enter element";
        this.items.push(data);
    }

    // Removes an element in the queue
    dequeue = () => {
        if(this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    // Returns the first element of the queue
    front = () => {
        if(this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }
}

// Creating object for queue class
var queue = new Queue();

console.log(queue.dequeue());
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
