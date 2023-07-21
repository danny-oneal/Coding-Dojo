/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class DLLNode {
    /**
     * Executed when the new keyword is used to construct a new node instance.
     * @param {any} data The data the new node will store.
     */
    constructor(data) {
        this.data = data;
        /**
         * By default a new node instance will not be connected to any other nodes,
         * these properties will be set after instantiation to connect the node to
         * a list. However, the head prev should remain null.
         *
         * @type {DLLNode|null}
         */
        this.prev = null;
        /** @type {DLLNode|null} */
        this.next = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // The list is empty to start.
        /** @type {DLLNode|null} */
        this.head = null;
        /** @type {DLLNode|null} */
        this.tail = null;
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        if (this.isEmpty()) {
            this.head = new DLLNode(data);
            this.tail = this.head;
        } else {
            this.head.prev = new DLLNode(data);
            this.head.prev.next = this.head;
            this.head = this.head.prev;
        }
        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        if (this.isEmpty()) {
            this.head = new DLLNode(data);
            this.tail = this.head;
        } else {
            this.tail.next = new DLLNode(data);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
        return this;
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        if (this.isEmpty()) {
            return null;
        } else if (this.head === this.tail) {
            const temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.data;
        } else {
            let runner = this.head;
            let count = 0;
            while (runner) {
                count++;
                runner = runner.next;
            }
            runner = this.head;
            let mid = Math.floor(count / 2);
            for (let i = 0; i < mid; i++) {
                runner = runner.next;
            }
            runner.prev.next = runner.next;
            runner.next.prev = runner.prev;
            return runner.data;
        }
    }

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertAfter(targetVal, newVal) {
        if (this.isEmpty()) {
            return false;
        } else if(this.tail.data === targetVal){
          const newNode = new DLLNode(newVal);
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
          return true;
        } else{
            let runner = this.head;
            while (runner !== null) {
                if (runner.data === targetVal) {
                    const newNode = new DLLNode(newVal);
                    newNode.prev = runner;
                    newNode.next = runner.next;
                    runner.next.prev = newNode;
                    runner.next = newNode;
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        if (this.isEmpty()) {
            return false;
        } else if(this.head.data === targetVal) {
          const newNode = new DLLNode(newVal);
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
          return true;
        } 
        else {
            let runner = this.head;
            while (runner !== null) {
                if (runner.data === targetVal) {
                    const newNode = new DLLNode(newVal);
                    newNode.next = runner;
                    newNode.prev = runner.prev;
                    runner.prev.next = newNode;
                    runner.prev = newNode;
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    /**
     * Adds all the given items to the back of this list.
     * @param {Array<any>} items Items to be added to the back of this list.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
// const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const triNodeList = new DoublyLinkedList().insertAtFront(1).insertAtFront(2).insertAtFront(3);
// const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new DoublyLinkedList().insertAtBackMany([-5,-10,4, -3, 6, 1, -7, -2,]);
// triNodeList.insertBefore(3, 4);
// triNodeList.insertBefore(1, 5);
// triNodeList.insertBefore(2, 6);

triNodeList.insertAfter(2, 4);
triNodeList.insertAfter(1, 5);

// console.log(singleNodeList.toArray());
console.log(triNodeList.toArray());
