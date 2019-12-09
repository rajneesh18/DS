/** Single Linked List
 * Linked list is a collection of nodes, which is linked to each other by the address
 * of another node stored in the node object.
*/

/** Node Class */
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

/** Linked List Class */
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Function to check list is empty or not
    isEmpty = () => { return (this.head) ? false : true ; }

    // Function to get the size of the list
    getSize = () => { return this.size; }

    // Function to print the list
    show = () => {
        if(!this.isEmpty()) {
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

    // Insert element at the starting of the list
    addFirst = (data) => {
        // New Node is created with property data and next = null
        let newNode = new Node(data);
        
        // Check the list is empty or not
        if(!this.isEmpty())
            newNode.next = this.head;
        this.head = newNode;
        this.size++;    // Increment the size of the list

        return this.head;
    }

    // Insert the element at the end of the list
    addLast = (data) => {
        let newNode = new Node(data);

        // Check the list is empty or not
        if(this.isEmpty())
            this.head = newNode;
        else {
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;    // Increment the size of the list

        return this.head;
    }

    // Insert element at any position in the list
    add = (index, data) => {

        if(index == null || index == undefined) {
            throw "Index is required"; return;
        } else  if(data == null || data == undefined) {
            throw "Data is required"; return;
        }

        let newNode = new Node(data);
        if(this.isEmpty() || index < 0) {
            throw "List is Empty..."; return;
        }

        if(index == 0 ) {
            newNode.next = this.head;
            this.head = newNode;

        } else {
            let currentIndex = 0;
            let current = this.head;
            while((currentIndex < (index-1)) && (current.next != null)){
                current = current.next;
                currentIndex++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;    // Increment the size of the list.

        return this.head;
    }

    // Remove first element from list
    removeFirst = () => {
        if(this.isEmpty()) return;
        let temp = this.head;
        this.head = this.head.next;

        this.size--;    // Decrement the size of the list

        return this.head;
    }

    // Remove last element from list
    removeLast = () => {
        if(this.isEmpty()) return;
        let current = this.head;
        while(current.next.next != null) {
            current = current.next;
        }

        let removedElement = current.next.data;
        current.next = null;

        this.size--;    // Decrement the size of the list

        return  this.head;
    }

    // Remove element at any position in the list
    remove = (index) => {

        // Check if index is present in list
        if(index < 0 || index >= this.getSize()) { return null; }

        let current = this.head;
        let previous;
        let currentIndex = 0;


        // Check if element is the first element
        if (index === 0 ) {
            this.head = current.next;
        } else {
            while( currentIndex < index ) {
                currentIndex++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }

        this.size--;    // Decrement the size of the list
        return this.head;
    }

    elementAt = (index) => {
        // Index is required
        if(index == null || index == undefined) { throw "Index is required"; return; }

        // Check if index is present in list
        if(index < 0 || index >= this.getSize()) { return null; }

        let currentIndex = 0;
        let current = this.head;

        while(currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        return current.data;    // return the element at that index
    }

    lastToFirst = () => {
        if(this.head == null || this.head.next == null) return this.head;
        let previous = null;
        let current = this.head;

        while(current.next) {
            previous = current;
            current =  current.next;
        }

        previous.next = null;
        current.next = this.head;
        this.head = current;

        return this.head;

    }

    reversePrint = (node) => {
        let current = (node) ? node : this.head;
        let str = '';
        if(current){
            if(current.next) {
                str = this.reversePrint(current.next);
            }
            str+= current.data+' ';
            return str;
        }
    }

}

// Linked List Implementation
let list = new LinkedList();

// Add Elements
list.addLast('A');
list.addLast('B');
list.addFirst('D');
list.add(2,'E');
list.addLast('F');
list.addFirst('C');

// Remove ELements
list.removeFirst();
list.removeLast();
list.remove(2);

console.log(list.show());
console.log(list.elementAt(1));
