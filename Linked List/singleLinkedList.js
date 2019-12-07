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
    isEmpty = () => {
        if(this.head == null)
            return true;
        return false;
    }

    // Function to get the size of the list
    getSize = () => {
        if(this.isEmpty())
            return 0;
        else {
            let current = this.head;
            let size = 1;
            while (current.next != null) {
                current = current.next;
                size++;
            }
            return size;
        }
    }

    // Function to print the list
    show = () => {
        if(!this.isEmpty()) {
            let current = this.head;
            let str = "[ ";
            str += `${current.data}`;
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
        
        if(this.isEmpty())
            this.head = newNode;
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Insert the element at the end of the list
    addLast = (data) => {
        let newNode = new Node(data);

        if(this.isEmpty())
            this.head = newNode;
        else {
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }

    }
}

// Linked List Implementation
let list = new LinkedList();
list.addLast(5);
list.addFirst(7);
list.addLast(3);
list.addFirst(9);
console.log(list.show());
