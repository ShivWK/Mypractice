// console.log("shivendra") 

//Firest we need to make a node (ekement of linked list) first , using class so that we can make multiple nodes with this and it is created as general purpose

class Node {
    constructor(data) {
        this.data = data;
        this.next = null; //By default
    }
}

//Now we need to make the linked list , a general purpose , means we can create linked from it by giving data to it inside it , it will use our node class to create new nodes by using our guven data

class LinkedList {
    constructor() {
        this.head =null; //Initially we dont have any head so null
    }

    //To insert at the begining of the linked list 

    //Current head reference will be given to the next of newly created node and now this will become the head node
    addFirst(data) {
        const newFirstNode = new Node(data);
        newFirstNode.next = this.head;
        this.head= newFirstNode;
    }

    //Add in this last of the Linked List

    //Here the current last will get the reference of the newly added node and the newly added will get next as null because it has became the last one now, we dont need to give null explicitly because by default next is null so nothing given to it will be null by itself

    //To get the last node we will traverse the linked list unless we got the node whose next is null, as we got it we will give the reference of the newly created last node to the next property of this node which we have found whose next is currently null

    // If the Linked list is empty that is head is null then we simply add this newLastNode to the head

    addLast(data) {
        const newLastNode = new Node(data);
       
        if(!this.head) {
            this.head = newLastNode;
            return;
        }

        //If linked list is not empty the traverse

        let current = this.head;

        //we will start from the head node and with each iter we will go to the next node by reassingning the current with reference present at the next property of the current node to , loop will run unless the next become null

        while (current.next) {
            current = current.next
        }

        //when the loop ends we will have the reference of the last node on current var so we will give our newly created last node referencce to the next property of the node which is on the current var

        current.next = newLastNode;
    }


    size(){
        let current = this.head;
        let counter = 0;

        while (current.next) {
            counter++;
            current = current.next;
        }

        return counter;
    }
    //Adding at a specific position for this we will need the size of our linked list

    addAt(data, index) {
        //Before doing anything we will check whether the given inedex is valid or not means it should be less than the size of the list and greater than or equal to 0.

        //Indexes are same here also like we have in arrays from 0 to size() - 1.

        if (index >= 0 && index < this.size()) {
            const newBetweenNode = new Node(data);

            //


        } else {
            console.log("Invalid Index");
            return;
        }
        
    }
}