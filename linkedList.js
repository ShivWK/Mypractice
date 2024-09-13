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
    addInStart(data) {
        const newFirstNode = new Node(data);
        newFirstNode.next = this.head;
        this.head= newFirstNode;
    }

    //Add in this last of the Linked List

    //Here the current last will get the reference of the newly added node and the newly added will get next as null because it has became the last one now, we dont need to give null explicitly because by default next is null so nothing given to it will be null by itself

    //To get the last node we will traverse the linked list unless we got the node whose next is null, as we got it we will give the reference of the newly created last node to the next property of this node which we have found whose next is currently null

    // If the Linked list is empty that is head is null then we simply add this newLastNode to the head

    addInLast(data) {
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

        while (current) {
            //we nned to count that one also which has null in its next because thet one also an element of the list, that's why we have current nor current.next in the condition
            counter++;
            current = current.next;
        }

        return counter;
    }
    //Adding at a specific position for this we will need the size of our linked list

    addAt(index, data) {
        //Before doing anything we will check whether the given inedex is valid or not means it should be less than the size of the list and greater than or equal to 0.

        //Indexes are same here also like we have in arrays from 0 to size() - 1.

        if (0 <= index && index <= this.size()) {
//ham size tak le skate hain but size se jada hoga tab bich me undefined vacant hoga wo galat hoga so size included hai agr size 5 to index 0 - 4 means last me 5th index aa skta hai  but 6 nahi aa skta kuki 5th vacant reh jaega

            const newBetweenNode = new Node(data);

            //First we need to find the index, then give the reference of the node which is already present there to the next of newly created node , then give the reference of this newly created node to the node preset at i - 1 inedx

            if (index === 0) {
                newBetweenNode.next = this.head;

                //reference dena is just like assigning the element to the next
                this.head = newBetweenNode;  
                return;   
            } 
                
            let current = this.head;
            for (let i = 0; i < index -1; i++) {
                 current = current.next;
            }

            newBetweenNode.next = current.next;
            current.next = newBetweenNode;
        
        } else {
            console.log("Invalid Index");
            return;
        }
        
    }

    removeFromTop() {
        if (!this.head) return null;
        this.head = this.head.next;

        //u can return the removed node data if required for that do this
        // const remivedNode = this.head;
        // this.head = this.head.next;
        // return remivedNode
    }

    removeFromLast() {
        if (!this.head) return null; // chsange

        //has only one element
        if (this.head.next === null) {
            this.head = null;
            return null;
        }
    
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }

        current.next = null;   

        //here also if u wanna return the removed node the do this
        // const removedNode = current.next;
        // current.next = null;
        // return removedNode.data;
    }

    removeFrom(index) {
        if (!this.head) return null;
        if (0 <= index && index < this.size()) {
            //here we cant take equality at size beecause that dont exist , we can add it but cant remove from there

            if (index === 0) {
                this.head = this.head.next;
                return;
            }

            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
    
            current.next = current.next.next;
        } else {
            console.log("Invalid Index");
            return;
        }
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// const link = new LinkedList()

// link.addAt(0, 25);

// function createrLinkedList(arr) {
//     const newLinkedList = new LinkedList();

//     for (let i = 0; i < arr.length; i++) {
//         newLinkedList.addAt(i, arr[i])
//     }
    
//     newLinkedList.addAt(6, 25)
//     newLinkedList.removeFrom(7);
//     return newLinkedList;
// }


// console.log()
// console.log(createrLinkedList([1,3,5,8,7,6]).print())


// class Mynode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head =null;
//     }
    
//     size(){
//         let current = this.head;
//         let counter = 0;

//         while (current) {
//             counter++;
//             current = current.next;
//         }

//         return counter;
//     }

//     addAt(index, data) {

//         if (0 <= index && index <= this.size()) {

//             const newBetweenNode = new Mynode(data);

//             if (index === 0) {
//                 newBetweenNode.next = this.head;

//                 this.head = newBetweenNode;  
//                 return;   
//             } 
                
//             let current = this.head;
//             for (let i = 0; i < index -1; i++) {
//                  current = current.next;
//             }

//             newBetweenNode.next = current.next;
//             current.next = newBetweenNode;
        
//         } else {
//             console.log("Invalid Index");
//             return;
//         }
        
//     }

// }

// class Solution {

//     construct(arr) {
//          const newLinkedList = new LinkedList();

//             for (let i = 0; i < arr.length; i++) {
//                 newLinkedList.addAt(i, arr[i])
//             }

//         return newLinkedList;
//     }
// }

function removeByValue(head, value) {
    if (!head) return null;

    if (head.data == value) {
        head = head.next;
        return head;
    }
 
    let current = head;
    
    while (current) {
        if (current.next.data === value) {
            current.next = current.next.next;            
            return head;
        }

        current = current.next;
    }
    
    return head;
}

function insertByValue(head, value, nodeValue ) {
    
}