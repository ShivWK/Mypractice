// console.log("shivendra") 

//First we need to make a node (ekement of linked list) first , using class so that we can make multiple nodes with this and it is created as general purpose

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

//Array to linked list 
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
            
            const head = new Node(arr[0]);
            let current = head;
            
            for (let i = 1 ; i < arr.length; i++) {
                current.next = new Node(arr[i]);
                current = current.next;
            }
            
    return head;
}

//removing by value when head is given

// function removeByValue(head, value) {
//     if (!head) return null;

//     if (head.data == value) {
//         head = head.next;
//         return head;
//     }
 
//     let current = head;
    
//     while (current) {
//         if (current.next.data === value) {
//             current.next = current.next.next;            
//             return head;
//         }

//         current = current.next;
//     }
    
//     return head;
// }

//remove by value when head is not given
    // function removeByValueNoHead(nodeValue) {
    //     nodeValue.data = nodeValue.next.data;
    //     nodeValue.next = nodeValue.next.next;
    // }


//inserting before the given value
    // function insertByValue(head, value, nodeValue ) {
    //     const newNode = new Node(nodeValue);

    //     if (!head) {
    //         head = newNode;
    //         return head;
    //     }

    //     if (head.data === value) {
    //         newNode.next = head;
    //         haed = newNode;
    //         return head;
    //     }

    //     let current = head;
    //     let previous = null

    //     while (current) {
    //         if (current.data === value) {
    //             newNode.next = current;
    //             previous.next = newNode;
    //             return head;
    //         }
    //         previous = current;
    //         current = current.next;
    //     }    

    //     return null
    // }

//If it is guarantied that head is not equal to the given node the

        // function insertByValueNotHead(head, value, nodeValue ) {
        //     const newNode = new Node(nodeValue);

        //     if (!head) {
        //         return head; //null
        //     }

        //     let current = head.next;
        //     let previous = head;

        //     while (current) {
        //         if (current.data === value) {
        //             newNode.next = current;
        //             previous.next = newNode;
        //             return head;
        //         }
        //         previous = current;
        //         current = current.next;
        //     }

        //     return head;
        // }

        // const head = arrayToLinkedList([1,2,5,7,8,6,9,10]);
        // insertByValueNotHead(head, 1, 11);

//custom print
function print(head) {
    let current = head;
    let result = '';

    while (current) {
        result += current.data + " -> ";
        current = current.next;
    }

    result += null;
    return result;
}
// console.log(print(head));

//Adding two numbers

    // let linkedList_01 = arrayToLinkedList([2,4,3])
    // let linkedList_02 = arrayToLinkedList([5,6,4])

    // function addTwoLinkedList(head1, head2) {
    //     let list_01 = head1, list_02 = head2;
    //     let dummyNode = new Node(-1);
    //     let current = dummyNode;
    //     let carry = 0;

    //     while (list_01 !== null || list_02 !== null) {
    //           let sum = carry;

    //           if (list_01) sum += list_01.data;
    //           if (list_02) sum += list_02.data;

    //           let newNode = new Node(sum % 10);
    //           carry = Math.floor(sum / 10);

    //           current.next = newNode; //dummy node ke next pe newNode dal diya
    //           current = newNode; //current ko age badha diya ab current newNodeko point krta hai to agli node newNode ki next pe jaega

    //           if (list_01) list_01 = list_01.next;
    //           if (list_02) list_02 = list_02.next;
    //     }

    //     if (carry) {
    //         let carryNode = new Node(carry);
    //         current.next = carryNode;
    //     }

    //     return dummyNode.next;
    // }

    // let sumLinkedList = addTwoLinkedList(linkedList_01, linkedList_02);

    // console.log(print(sumLinkedList));


//Even and odd linked List

    //Brute force
        // let evenOddListHead = arrayToLinkedList([1,2,3,4,5,6,7,8,9])

        // function evenOddList(head) {
        //     if(!head || !head.next) return head;

        //     let arr = [];
        //     let current = head;

        //     while (current && current.next) {
        //         arr.push(current.data);
        //         current = current.next.next;
        //     }

        //     if (current) arr.push(current.data); 

        //     current = head.next;
        //     while (current && current.next) {
        //         arr.push(current.data);
        //         current = current.next.next;
        //     }
        //     if (current) arr.push(current.data);

        //     current = head;
        //     let i = 0;

        //     while (current) {
        //         current.data = arr[i];
        //         current = current.next;
        //         i++;
        //     }

        //     return head;
        // } 

        // console.log(print(evenOddList(evenOddListHead)));

    //Optimal solution

    //     function evenOddListOptimal(head) {
    //         if (!head || !head.next) return head;

    //         let odd = head, even = head.next, evenHead = head.next;

    //         while (even && even.next) {
    //             odd.next = odd.next.next;
    //             even.next = even.next.next;

    //             odd = odd.next;
    //             even = even.next;
    //         }

    //         odd.next = evenHead;

    //         return head;
    //     }
    
    // console.log(print(evenOddListOptimal(evenOddListHead)));

//Sorting a linked list having 0's , 1's, 2's

    //Brute force

        // function sortTheList(head) {
        //     if (!head || !head.next) return head;  

        //     let current = head;
        //     let zeros = 0, ones = 0, twos = 0;
            
        //     while (current) {
        //         if (current.data === 0) zeros++;
        //         else if (current.data === 1) ones++;
        //         else twos++; 

        //         current = current.next;
        //     }

        //     current = head;
        //     while (current) {
        //         if (zeros) {
        //             current.data = 0;
        //             zeros--;
        //         } else if (ones) {
        //             current.data = 1;
        //             ones--;
        //         } else {
        //             current.data = 2;
        //             twos--;
        //         }

        //         current = current.next;
        //     }
            
        //     return head;
        // }

        // let zerosOnesTwosList = arrayToLinkedList([1,2,1,1,2,1,2,1,2])

        // console.log(print(sortTheList(zerosOnesTwosList)));
    
    //Optimal Solution

    // function sortTheListOptimal(head) {
    //     if (!head || !head.next) return head;

    //     let current = head;
    //     let zeroHead = new Node(-1), oneHead = new Node(-1), twoHead = new Node(-1);
    //     let zero = zeroHead, one = oneHead, two = twoHead;

    //     while (current) {
    //         if (current.data === 0) {
    //             zero.next = current; //Old zero ke next pe current diya 
    //             zero = current; //zero ko age badhaya.
    //         } else if (current.data === 1) {
    //             one.next = current;
    //             one = current;
    //         } else {
    //             two.next = current;
    //             two = current;
    //         }

    //         current = current.next;
    //     }

    //     zero.next = (oneHead.next) ? oneHead.next : twoHead.next;
    //     one.next = twoHead.next;
    //     two.next = null;

    //     let newHead = zeroHead.next;

    //     return newHead
    // }

    // console.log(print(sortTheListOptimal(zerosOnesTwosList)));

    //T.C = O(n) not exactly but yaeh , doing one link change at a time and loop iterates till the end of the list
    //S.C = O(1) While linking nodes we are using the same old nodes, not creating new nodes.
    //the dummy nodes will take constant space as they wont grow with input size.

//Remove the given nth node from the end

    //Brute force

    // function removeFromLast(head, n) {
    //     if (!head) return head;

    //     if (n == 1 && !head.next) {
    //         head = null;
    //         return head;
    //     }

    //     let current = head, size = 0;
    //     while (current) {
    //         size++;

    //         current = current.next;
    //     }

    //     if (n === size) return head.next;

    //     current = head;
    //     let nthNodeTobeFound = size - n;
    //     while (current) {
    //         nthNodeTobeFound--;
            
    //         if (nthNodeTobeFound === 0) break;
    //         current = current.next;
    //     }

    //     current.next = current.next.next;
    //     return head;
    // }

    // let listToRemoveFormLast = arrayToLinkedList([1,2,5,8,3,9,4,6])
    // console.log(print(removeFromLast(listToRemoveFormLast, 8)));

    //Optimal solution

    // function removeFromLast2(head, n) {
    //     if (!head) return head;

    //     if (n == 1 && !head.next) {
    //         head = null;
    //         return head;
    //     }

    //     let fast = head, slow;
    //     for (let i = 0; i < n; i++) {
    //         fast = fast.next;
    //     }

    //     if (fast === null) return head.next;
    //     slow = head;

    //     while (fast.next) {
    //         slow = slow.next;
    //         fast = fast.next;
    //     }

    //     slow.next = slow.next.next;
    //     return head;
    // }

    // let listToRemoveFormLast2 = arrayToLinkedList([1,2,3,4,5,6,7,8])
    // console.log(print(removeFromLast2(listToRemoveFormLast2, 8)));

//Reverse the LinkedList

    //Brute force
    // function reverseTheList(head) {
    //     if (!head || !head.next) return head;

    //     let current = head;
    //     let stack = [];

    //     while (current) {
    //         stack.push(current.data);
    //         current = current.next;
    //     }

    //     current = head;
    //     while (current) {
    //         current.data = stack.pop();
    //         current = current.next;
    //     }

    //     return head;
    // }

    // let reversalList = arrayToLinkedList([1,2,3,4,5,6,7,8,9]);
    // console.log(print(reverseTheList(reversalList)));

    //Optimal solution

    // function reverseTheLinks(head) {
    //     if (!head || !head.next) return head;

    //     let current = head, prev = null;

    //     while (current) {
    //         let front = current.next;
    //         current.next = prev;
    //         prev = current;
    //         current = front;
    //     }

    //     return prev;
    // }

    // let reversalList = arrayToLinkedList([1,2,3,4,5,6,7,8,9]);
    // console.log(print(reversalList))
    // console.log(print(reverseTheLinks(reversalList)));

//Mid node finding

    //Brute Force

    // function findMid(head) {
    //     if (!head || !head.next) return head;

    //     let current = head, size = 0;
    //     while (current) {
    //         size++;
    //         current = current.next;
    //     }

    //     let midAt = Math.floor(size/2) + 1;
    //     current = head;

    //     while (current) {    
    //         if (--midAt === 0) break;
    //         current = current.next
    //     }
        
    //     return current;
    // }

    // let midList = arrayToLinkedList([1,2,3,4,5])
    // console.log(findMid(midList).data);

    //Optimal solution

    // function findMidOptimal(head) {
    //     if (!head || !head.next) return head;

    //     let fast = head, slow = head;

    //     while (fast && fast.next) {
    //         slow = slow.next;
    //         fast = fast.next.next;
    //     }

    //     return slow;
    // }

    // let midList2 = arrayToLinkedList([1,2,3,4,5])
    // console.log(findMidOptimal(midList2).data);


//Is palindrom or not

    //Brute force

    // function isPalindrom(head) {
    //     if (!head || !head.next) return true;

    //     let myStack = [], current = head;

    //     while (current) {
    //         myStack.push(current.data);
    //         current = current.next;
    //     }

    //     current = head;
    //     while (current) {
    //         if (current.data === myStack.pop()) return true;

    //             current = current.next;
    //             return false;         
    //     }
    // }

    // let palindromList = arrayToLinkedList([1,2,3,3,2,1]);
    // console.log(isPalindrom(palindromList));
    // let notPalindromList = arrayToLinkedList([1,2,3,4,5,6]);
    // console.log(isPalindrom(notPalindromList));

    //Optimal Solution

    // function isPalindromOptimal(head) {
    //     if (!head || !head.next) return true;

    //     //finding mid
    //     let slow = head, fast = head;
    //     while (fast.next && fast.next.next) {
    //         slow = slow.next;
    //         fast = fast.next.next;
    //     }

    //     //Reversing the second half
    //     let current = slow.next, prev = null;
    //     while (current) {
    //         let front = current.next;
    //         current.next = prev;
    //         prev = current;
    //         current = front;
    //     }

    //     //matching
    //     let first = head, second = prev;
    //     while (second) {
    //         if (first.data !== second.data) {

    //             //Reversing again before return
    //             current = prev; 
    //             let prev2 = null;
    //             while (current) {
    //                 let front = current.next;
    //                 current.next = prev2;
    //                 prev2 = current;
    //                 current = front;
    //             } 
    //             return false;
    //         }
    //         first = first.next;
    //         second = second.next;
    //     }

    //     //Reversing again before return
    //     current = prev, prev = null;
    //     while (current) {
    //         let front = current.next;
    //         current.next = prev;
    //         prev = current;
    //         current = front;
    //     } 
    //     return true;

    // }

    // let palindromList = arrayToLinkedList([1,2,3,2,1])
    // let notPalindromList = arrayToLinkedList([1,2,3,4,5])

    // console.log(isPalindromOptimal(notPalindromList));

//Add 1 to a number represented by linkedList

    //brute force

        // function addOne(head) {
        //     if (!head) return null;

        //     let current = head, prev = null;
        //     while (current) {
        //         let front = current.next;
        //         current.next = prev;
        //         prev = current;
        //         current = front;
        //     }

        //     let newHead = prev;

        //     current = newHead;
        //     let carry = 1;

        //     while (current) {
        //         let sum = current.data + carry;

        //         if (sum < 10) {
        //             current.data = sum;
        //             carry = 0;
        //             break;
        //         } else {
        //             current.data = 0;
        //             carry = 1;
        //         }

        //         current = current.next;
        //     }

        //     current = newHead, prev = null;
        //     while (current) {
        //         let front = current.next;
        //         current.next = prev;
        //         prev = current;
        //         current = front;
        //     }

        //     newHead = prev;

        //     if (carry !== 0) {
        //         let carryNode = new Node(carry);
        //         carryNode.next = newHead;
        //         newHead = carryNode;
        //     }

        //     return newHead
        // }

        // let additionList = arrayToLinkedList([1, 3, 4, 5, 8, 5, 8, 3])
        // console.log(print(addOne(additionList)));

    //Optimal Solution

        // function helper(node) { 
        //     if (node === null) return 1;

        //     let carry = helper(node.next)

        //     let sum = node.data + carry;
        //     if (sum < 10) {
        //         node.data = sum;
        //         return 0;
        //     } else {
        //         node.data = 0;
        //         return 1;
        //     }
        // }

        // function addOneOptimal(head) {
        //     if (!head) return null;

        //     let carry = helper(head);

        //     if (carry !== 0) {
        //         let carryNode = new Node(carry);
        //         carryNode.next = head;
        //         head = carryNode;
        //     } 
            
        //     return head;
        // }

        // let additionList = arrayToLinkedList([9,9,9,9])
        // console.log(print(addOneOptimal(additionList)));

//Detect the loop in the linked list

    //Brute force

        // function isLoopThere(head) {
        //     if (!head) return false;
            
        //     let myMap = new Map();
        //     let current = head;

        //     while (current) {
        //         if (myMap.has(current)) return true;

        //         myMap.set(current, 1);
        //         current = current.next;
        //     }

        //     return false;
        // }

    //Optimal solution

        // function isLoopThereOptimal() {
        //     if (!head) return false;

        //     let slow = head, fast = head;

        //     while (fast !== null && fast.next !== null) {
        //         slow = slow.next;
        //         fast = fast.next.next;

        //         if (slow === fast) return true
        //     }

        //     return false;
        // }

//Length of the loop in the list

    //Brute force

        // function isLoopThere(head) {
        //     if (!head) return 0;
            
        //     let myMap = new Map();
        //     let current = head, count = 0;

        //     while (current) {
        //         count++;

        //         if (myMap.has(current)) {
        //             return count - myMap.get(current);
        //         }

        //         myMap.set(current, count);
        //         current = current.next;
        //     }

        //     return 0;
        // }

    //Optimal

        // function findLength(slow, fast) {
        //     let count = 1;
        //     fast = fast.next;

        //     while (fast !== slow) {
        //         count++;
        //         fast = fast.next
        //     }

        //     return count;
        // }

        // function isLoopThereOptimal() {
        //     if (!head) return 0;

        //     let slow = head, fast = head;

        //     while (fast !== null && fast.next !== null) {
        //         slow = slow.next;
        //         fast = fast.next.next;

        //         if (slow === fast) return findLength(slow, fast)
        //     }

        //     return 0;
        // }

//Finding intersection point in the linked list

    //Brute force

        // function intersectionInList(head1, head2) {
        //     if (!head1 || !head2) return null;

        //     let myMap = new Map();
        //     let current = head1;

        //     while (current) {
        //         myMap.set(current, 1);

        //         current = current.next;
        //     }
            
        //     current = head2;
        //     while (current) {
        //         if (myMap.has(current)) return current;
                
        //         current = current.next;
        //     }

        //     return null;
        // }

    //Better Solution

        // function collisionPoint(h1, h2, d) {
        //     while (d) {
        //         d--;
        //         h2 = h2.next;
        //     }

        //     let current1 = h1, current2 = h2;

        //     while (current1) {
        //         if (current1 === current2) return current1;

        //         current1 = current1.next;
        //         current2 = current2.next;
        //     }

        //     return null;
        // }

        // function intersectionOfList(head1, head2) {
        //     if (!head1 || !head2) return null;

        //     let current = head1;
        //     let size1 = 0, size2 = 0;

        //     while (current) {
        //         size1++;

        //         current = current.next;
        //     }

        //     current = head2;
        //     while (current) {
        //         size2++;

        //         current = current.next;
        //     }

        //     if (size1 < size2) {
        //         return collisionPoint(head1, head2, (size2 - size1));
        //     } else {
        //         return collisionPoint(head2, head1, (size1 - size2));
        //     }
        // }

    //Optimal solution

        // function intersectionOptimal(head1, head2) {
        //     if (!head1 || !head2) return null;

        //     let current1 = head1, current2 = head2;

        //     while (current1 !== current2) {
        //         current1 = current1.next;
        //         current2 = current2.next;

        //         if (current1 === current2) return current1;
        //         if (current1 === null) {
        //             current1 = head2;
        //         } else if (current2 === null) {
        //             current2 = head1;
        //         } 
        //     }

        //     return current1;
        // }

//Delete middle node

        //Brute force

            // function deleteBrute(head) {
            //     if (!head || !head.next) return null;

            //     let size = 0, current = head;
            //     while (current) {
            //         size++;
            //         current = current.next;
            //     }

            //     let requiredNode = Math.floor(size/2);

            //     current = head;
            //     while (current) {
            //         requiredNode--;

            //         if (requiredNode === 0) {
            //             current.next = current.next.next;
            //             break;
            //         }

            //         current = current.next;
            //     }

            //     return head;
            // }

            // let listToDeleteMiddle1 = arrayToLinkedList([1,3,4,7,1,2,6]);
            // console.log(print(deleteBrute(listToDeleteMiddle1)));
    
    //Optimal solution

            // function deleteOptimal(head) {
            //     if (!head || !head.next) return null;

            //     let slow = head, fast = head.next.next;
            //     while (fast && fast.next) {
            //         slow = slow.next;
            //         fast = fast.next.next;                    
            //     }

            //     slow.next = slow.next.next;

            //     return head;

            // }

            // let listToDeleteMiddle = arrayToLinkedList([1,3,4,7,1,2,6]);
            // console.log(print(deleteOptimal(listToDeleteMiddle)));

//Find the start point of the loop in the linked list

    //Brute Force

        // function startPointOfLoop() {
        //     if (!head || !head.next) return null;

        //     let myMap = new Map();
        //     let current = head;

        //     while (current) {
        //         if (myMap.has(current)) return current;

        //         myMap.set(current, 1);
        //         current = current.next;
        //     }

        //     return null;
        // }

    //Optimal solution

    // function startPointOfLoopOptimal() {
    //     if (!head || !head.next) return null;

    //     let slow = head, fast = head;

    //     while (fast && fast.next) {
    //         slow = slow.next;
    //         fast = fast.next.next;

    //         if (slow === fast) {
    //             slow = head;

    //             while (slow !== fast) {
    //                 slow = slow.next;
    //                 fast = fast.next
    //             }

    //             return slow;
    //         }
    //     }

    //     return null
    // }

//Merge twio sorted lists

    //Brute force

        // function listMerger(head1, head2) {
        //     if (!head1 && !head2) return head1;

        //     let midArray = [], current = head1;

        //     while (current) {
        //         midArray.push(current.data);

        //         current = current.next;
        //     }

        //     current = head2;
        //     while (current) {
        //         midArray.push(current.data);

        //         current = current.next;
        //     }

        //     midArray.sort((a,b) => a - b);

        //     let head = new Node(midArray[0])
        //     current = head;

        //     for (let i = 1; i < midArray.length; i++) {
        //         current.next = new Node(midArray[i]);
        //         current = current.next;
        //     }

        //     return head;
        // }

        // let listOne = arrayToLinkedList([2,4,6,8,10,12,14]);
        // let listTwo = arrayToLinkedList([1,3,5,7,9,11,13]);

        // console.log(print(listMerger(listOne, listTwo)))

    //Optimal solution

        function listMerger2(head1, head2) {
            if (!head1 && !head2) return head1;

            let temp1 = head1, temp2 = head2;
            let dummyNode = new Node(-1);
            let current = dummyNode;

            while (temp1 && temp2) {
                if (temp1.data < temp2.data) {
                    current.next = temp1;
                    temp1 = temp1.next;
                } else {
                    current.next = temp2;
                    temp2 = temp2.next;
                }

                current = current.next;
            }

            if (temp1) current.next = temp1;
            else current.next = temp2;
            
            return dummyNode.next;
        }

        // let listOne = arrayToLinkedList([2,4,6,8,10,12,14]);
        // let listTwo = arrayToLinkedList([1,3,5,7,9,11,13]);

        // console.log(print(listMerger2(listOne, listTwo)));


//Sort the array

    // Brute force

        function sortTheList(head) {
            if (!head || !head.next) return head;

            let current = head, midArray = [];

            while (current) {
                midArray.push(current.data);

                current = current.next;
            }

            midArray.sort((a,b) => a - b);

            current = head; 
            let i = 0;
            while (current) {
                if (current.data !== midArray[i]) {
                    current.data = midArray[i];
                }
                i++;
                current = current.next;
             }

             return head;
        }

        // let newArrayLinkedList = arrayToLinkedList([2,5,8,4,6,1,3,7]);
        // console.log(print(sortTheList(newArrayLinkedList)));

    //Optimal Solution 

        function findMid(head) {
            if (!head || !head.next) return head;

            let fast = head, slow = head;

            while (fast.next && fast.next.next) {
                slow = slow.next;
                fast = fast.next.next;
            }

            return slow;
        }

        function sortTheListOptimal(head) {

            if (!head || !head.next) return head;

            let mid = findMid(head);
            let leftHead = head;
            let rightHead = mid.next;
            mid.next = null;

            leftHead = sortTheListOptimal(leftHead);
            rightHead = sortTheListOptimal(rightHead);

            return listMerger2(leftHead, rightHead)
        }

        let newArrayLinkedList2 = arrayToLinkedList([4,2,1,3]);
        console.log(print(sortTheListOptimal(newArrayLinkedList2)));

