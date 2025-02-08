//Stack useing arrays

        class Stack {
            constructor(maxsize = null) {
                this.stack = [];
                this.maxsize = maxsize;
            }

            push(eleemnt) {
                if (this.size() === this.maxsize) {
                    console.error("Stack Overflow: Cannot add more elements.");
                } else {
                    this.stack.push(eleemnt);
                }
            }

            pop() {
                if (this.size() === 0) {
                    return "stack is empty";
                }

                return this.stack.pop();
            }

            peek() {
                if (this.size() === 0) {
                    return "stack is empty";
                }

                return this.stack[this.stack.length - 1];
            }

            isEmpty() {
                return this.stack.length === 0;
            }

            size() {
                return this.stack.length;
            }

            print() {
                for (let i = 0; i < this.size(); i++) {
                    console.log(i === this.size() - 1 ? this.stack[i] + '' : this.stack[i] + ",");
                }
            }
        }

        // const stack = new Stack(3);
        // stack.push(11);
        // stack.push(12);
        // stack.push(13);
        // stack.push(14);
        // stack.push(15);
        // stack.print();
    
    //New Stack Array implementation

        class StackImp {
            constructor(size = 0) {
                this.top = -1;
                this.stack = []
                this.maxSize = size;
            }

            push(ele) {
                if (this.maxSize != 0) {
                    
                    if (this.top >= this.maxSize - 1) {
                        alert("Stack is full");
                    } else {
                        this.top += 1;
                        this.stack[this.top] = ele;
                    }

                } else {
                    this.top += 1;
                    this.stack[this.top] = ele;
                }
            }

            pop() {
                if (this.top == -1) {
                    alert("Stack is empty");
                    return null;
                } else {
                    const poppedElement = this.stack[this.top];
                    this.top -= 1;
                    return poppedElement;
                }
            }

            peek() {
                if (this.top == -1) {
                    alert("Stack is empty");
                    return null;
                } else {
                    return this.stack[this.top];
                }
            }

            size() {
                if (this.top === -1) {
                    return 0;
                } else {
                    return this.top + 1;
                }
            }
        } 
        
        // let myNewStack = new StackImp();
        // myNewStack.push(12);
        // myNewStack.push(13);
        // myNewStack.push(14);
        // myNewStack.push(15);
        // myNewStack.push(16);

        // console.log(myNewStack.peek());
        // console.log(myNewStack.size());
        // console.log(myNewStack.pop());
        // console.log(myNewStack.peek());
        // console.log(myNewStack.size());

    //Stack implementation using Linked List

        class Node {
            constructor(data) {
                this.data = data;
                this.next = null;
            }
        }

        class StackLinkedList {
            constructor() {
                this.top = null;
                this.currentSize = 0;
            }

            push(ele) {
                let node = new Node(ele);
                node.next = this.top;
                this.top = node;
                this.currentSize++;
                return "pushed";
            }

            pop() {
                if (!this.top) return "Stack is empty";
                let popped = this.top;
                this.top = this.top.next;
                this.currentSize--;
                return popped.data;
            }

            size() {
                return this.currentSize;
            }

            peek() {
                return this.top.data;
            }
        }  

        // let stack = new StackLinkedList();
        // stack.push(10);
        // stack.push(20);
        // stack.push(30);
        // console.log(stack.peek());  // Output: 30
        // console.log(stack.pop());   // Output: 30
        // console.log(stack.size());  // Output: 2
        // console.log(stack.pop());   // Output: 20
        // console.log(stack.pop());   // Output: 10
        // console.log(stack.pop());   // Output: null (since stack is empty)

    //Stacks using Queues
        
        class StacksByQueue {
            constructor() {
                this.queue = [];
            }

            push(element) {
                let size = this.queue.length;
                this.queue.push(element);

                for (let i = 1; i <= size; i++) {
                    this.queue.push(this.queue.shift());
                }
            }

            pop() {
                if (this.isEmpty()) {   //this object has all the properties and methods of the class available to it so we can call any method anywhere. 
                    return "Stack is empty";
                }
 
                return this.queue.shift();
            }

            isEmpty() {
                return this.queue.length === 0;
            }

            peek() {
                if (this.isEmpty()) {
                    return "Stack is empty"
                }

                return this.queue[0];
            }

            size() {
                return this.queue.length;
            }
        } 

        // let myQStack = new StacksByQueue();
        // myQStack.push(11);
        // myQStack.push(12); 
        // myQStack.push(13); 
        // myQStack.push(14); 
        // console.log(myQStack.peek());
        // console.log(myQStack.pop());
        // myQStack.push(15);
        // console.log(myQStack.pop());
        // console.log(myQStack.pop());
        // console.log(myQStack.pop());
        // console.log(myQStack.pop());
        // console.log(myQStack.pop());

//Queue useing arrays

        class Queue {
            constructor() {
                this.queue = [];
            }

            enqueue(element) {
                this.queue.push(element);
            }

            dequeue() {
                if (this.isEmpty()) {
                    return "Underflow, cannot perform dequeue.";
                }

                return this.queue.shift();
            }

            isEmpty() {
                return this.queue.length === 0;
            }

            front() {
                if (this.isEmpty()) {
                    return "NO element in the queue."
                }

                return this.queue[0];
            }

            size() {
                return this.queue.length;
            }

            print() {
                let result = '';

                for (let i = 0; i < this.size(); i++) {
                    result += i === this.size() - 1 ? this.queue[i] : this.queue[i] + ", ";
                }

                return result;
            }
        }

        // let queue = new Queue();
        // queue.enqueue(11);
        // queue.enqueue(12);
        // queue.enqueue(13);
        // queue.enqueue(14);
        // queue.enqueue(15);
        // console.log(queue.print());
        // console.log(queue.dequeue());
        // console.log(queue.front());

    //New Queue array implementation

        class QueueImp {
            constructor(size = 0) {
                this.maxSize = size;
                this.queue = [];
                this.start = -1;
                this.end = -1;
                if (this.maxSize > 0) {
                    this.currentSize = 0;
                }
            }

            push(ele) {
                if (this.maxSize !== 0) {

                    //bounded case
                    if (this.currentSize >= this.maxSize) {
                        return "Queue is full";
                    }
                    if (this.currentSize === 0) {
                        this.start = 0;
                        this.end = 0;
                    } else {
                        this.end = (this.end + 1) % this.maxSize;
                    }

                    this.queue[this.end] = ele;
                    this.currentSize++;
                    return "ELement Added";
                    
                } else {
                    if (this.start == -1 && this.end == -1) {
                        this.start = 0;
                        this.end = 0;
                    } else {
                        this.end++;
                    }
                    this.queue[this.end] = ele;
                    return "Element Added"
                }
            }

            pop() {
                if (this.maxSize !== 0) {

                    //Bounded case
                    if (this.currentSize === 0) {
                        return "Queue is empty";
                    } 

                    const poppedElement = this.queue[this.start];

                    //confusion : Yahan pehele hamne start position se element pop kara liya means ab start age jaega previus element ko chhodke kuki tabhi wo popped mana jaega n to phirse access ho jaega to start ka age badhana jarurui hai. 
                    //Agr start end ki position pe hai ar hamne wahan se element pop kiya means ab koi element nahi hai queue me , queue khali hai to hme queue ko reset karna padega i.e., start and end both at -1;
                    
                    if (this.start === this.end) {
                        this.start = -1;
                        this.end = -1;

                    } else {
                        this.start = (this.start + 1) % this.maxSize;
                    }
 
                    this.currentSize--;
                    return poppedElement; 
                    
                } else {
                    if (this.start === -1 && this.end === -1) {
                        return "Queue is empty";
                    }
                    const poppedElement = this.queue[this.start];
                    this.start = this.start + 1;

                    if (this.start > this.end) {
                        this.start = -1;
                        this.end = -1;
                    }

                    return poppedElement;
                }
            }

            peek() {
                if (this.start === -1 && this.end === -1) {
                    return "Queue is empty";
                } 

                return this.queue[this.start];
            }

            size() {
                if (this.start === -1 && this.end === -1) {
                    return "queue is empty";
                }

                if (this.maxSize !== 0) {
                    return this.currentSize;
                }

                return this.end - this.start + 1;
            }
        }


        // let myQueue = new QueueImp();

        // console.log(myQueue.push(11));
        // console.log(myQueue.push(12));
        // console.log(myQueue.size());
        // console.log(myQueue.pop());
        // console.log(myQueue.pop());
        // console.log(myQueue.pop());

        // console.log(myQueue.size());

        // let myQueue2 = new QueueImp(4);

        // console.log(myQueue2.push(11));
        // console.log(myQueue2.push(12));
        // console.log(myQueue2.push(13));
        // console.log(myQueue2.push(14));
        // console.log(myQueue2.push(15));

        // console.log(myQueue2.size());
        // console.log(myQueue2.pop());
        // console.log(myQueue2.pop());
        // console.log(myQueue2.size());

    //Queue using linked List

        //two pointers are needed start and end
        //pop - remove from front
        //push - add in last

        class QueueLinkedList {
            constructor () {
                this.start = null;
                this.end = null;
                this.currentSize = 0;
            }

            push(ele) {
                let node = new Node(ele);

                if (this.start == null) {
                    this.start = node;
                    this.end = node;
                } else {
                    //initiallly end and start both are pointing to the same node so end.next == start.next, so 1st insertion ke bad 2nd insertion pe jo end.next diya jaega wahi start.next pe hoga, 2nd ke bad aisa nahi hoga

                    this.end.next = node; //start pe jo bhi node hogi uske next pe new node aa gai ager ye 2nd insertion hai to
                    this.end = node; //end ko age badh diya

                }

                this.currentSize++;
                return "Element added";
            } 

            pop() {
                if (this.start == null) return "Queue is empty";

                let poppedData = this.start.data;

                if (this.currentSize === 1) {
                    this.start = null;
                    this.end = null; 
                } else {
                    this.start = this.start.next;
                }

                this.currentSize--;
                return poppedData;
            }

            peek() {
                if (this.start == null) return "Queue is empty";
                return this.start.data;
            }

            size() {
                return this.currentSize;
            }
        }

        // let queue = new QueueLinkedList();
        //     queue.push(10);
        //     queue.push(20);
        //     queue.push(30);
        //     console.log(queue.peek());  // Output: 10
        //     console.log(queue.pop());   // Output: 10
        //     console.log(queue.size());  // Output: 2
        //     console.log(queue.pop());   // Output: 20
        //     console.log(queue.pop());   // Output: 30
        //     console.log(queue.pop());   // Output: "Queue is empty"

    //Queue implementation using stacks
        
            class QueueByStack {
                constructor(maxsize = null) {
                    this.stack = [];
                    this.maxsize = maxsize;
                }

                push(eleemnt) {
                    if (this.size() === this.maxsize) {
                        console.error("Queue Overflow: Cannot add more elements.");
                    } else {
                        let size = this.stack.length;
                        this.stack.push(eleemnt);

                        for (let i = 1; i <= size; i++) {
                            this.stack.push(this.stack.shift());
                        }
                    }
                }

                pop() {
                    if (this.size() === 0) {
                        return "Queue is empty";
                    }

                    return this.stack.pop();
                }

                peek() {
                    if (this.size() === 0) {
                        return "Queue is empty";
                    }

                    return this.stack[this.stack.length - 1];
                }

                isEmpty() {
                    return this.stack.length === 0;
                }

                size() {
                    return this.stack.length;
                }

                print() {
                    for (let i = 0; i < this.size(); i++) {
                        console.log(i === this.size() - 1 ? this.stack[i] + '' : this.stack[i] + ",");
                    }
                }
            }

            // let mySQueue = new QueueByStack();
            // mySQueue.push(11);
            // mySQueue.push(12);
            // mySQueue.push(13)
            // mySQueue.push(14)
            // mySQueue.push(15);
            // console.log(mySQueue.peek());
            // console.log(mySQueue.pop());
            // console.log(mySQueue.pop());
            // console.log(mySQueue.pop());
            // mySQueue.push(16)
            // mySQueue.push(17);
            // mySQueue.push(18);
            // console.log(mySQueue.peek());
            // console.log(mySQueue.pop());
            // console.log(mySQueue.pop());
            // console.log(mySQueue.pop());
            // console.log(mySQueue.pop());
            // console.log(mySQueue.pop());
            // console.log(mySQueue.pop());
            // mySQueue.print()

//expression convertions

        function priority(str) {
            if (str === "^") return 3;
            else if (str === "*" || str === "/") return 2;
            else if (str === "+" || str === "-") return 1;
            else return -1;
        }

//infix to postfix conversion

        function infixToPostfix(str) {
            let ans = '', i = 0;
            let stack1 = new Stack();
            let n = str.length;

            while (i < n) {
                if (str[i] >= "A" && str[i] <= "Z" || str[i] >= "a" && str[i] <= 'z' || str[i] >= '0' && str[i] <= '9') {
                    ans += str[i];

                } else if (str[i] == '(' ) {
                    stack1.push(str[i]);

                } else if (str[i] == ')') {
                    while (!stack1.isEmpty() && stack1.peek() !== "(") {
                        ans += stack1.pop();

                    }
                    stack1.pop();
                } else {
                    while (!stack1.isEmpty() && priority(stack1.peek()) >= priority(str[i])) {
                        ans += stack1.pop();

                    }
                    stack1.push(str[i]);
                }

                i++;
            }

            while (!stack1.isEmpty()) {
                ans += stack1.pop();
            }

            return ans;
        }

        // console.log(convertion("a+b*(c^d-c)"));

        function reverse(str) {
            let ans = '';

            for (let i = str.length - 1; i >= 0; i--) {
                if (str[i] === "(") {
                    ans += ")";
                } else if (str[i] === ")") {
                    ans += "(";
                } else {
                    ans += str[i];
                }
            }

            return ans;
        }

// infix to prefix

        function infixToPrefix(str) {
            let ans = '', i = 0;
            let stack1 = new Stack();
            let n = str.length;

            str = reverse(str);

            while (i < n) {
                if (str[i] >= "A" && str[i] <= "Z" || str[i] >= "a" && str[i] <= 'z' || str[i] >= '0' && str[i] <= '9') {
                    ans += str[i];

                } else if (str[i] == '(' ) {
                    stack1.push(str[i]);

                } else if (str[i] == ')') {
                    while (!stack1.isEmpty() && stack1.peek() !== "(") {
                        ans += stack1.pop();

                    }
                    stack1.pop(); //poping the opening bracket too.
                } else {
                    if (str[i] === '^') {
                        while (!stack1.isEmpty() && priority(stack1.peek()) >= priority(str[i])) {
                            ans += stack1.pop();
                        }

                    } else {
                        while (!stack1.isEmpty() && priority(stack1.peek()) > priority(str[i])) {
                            ans += stack1.pop();
        
                        }
                    }
                    
                    stack1.push(str[i]);
                }

                i++;
            }

            while (!stack1.isEmpty()) {
                ans += stack1.pop();
            }
            ans = reverse(ans);

            return ans;
        }

        // console.log(infixToPrefix('(A*B)+(C*D)'));

//Balanced Prarenthesis

        function balancedParenthesis(str) {
            let stack = new Stack()

            for (let i = 0; i < str.length; i++) {
                if (str[i] === "(" || str[i] === "{" || str[i] === "[") {

                    stack.push(str[i]);
                } else {
                    let popped = stack.pop();

                    if (popped === "stack is empty") {
                        return false;
                    }

                    if (
                        (str[i] === ")" && popped !== "(") || 
                        (str[i] === "}" && popped !== "{") || 
                        (str[i] === "]" && popped !== "[")
                        ) 
                        {
                        return false;
                    } 
                    
                }
            }

            return stack.isEmpty();
        }

        // console.log(balancedParenthesis("(){[()]}"));
        // console.log(balancedParenthesis("]["));

//MinStack

    //Brute force

        class MinStack {
            constructor() {
                this.minStack = [];
            }

            push(ele) {
                let min = (this.minStack.length === 0) ? ele : Math.min(ele, this.minStack[this.minStack.length - 1][1]);
                this.minStack.push([ele, min]);
            }

            pop() {
                if (this.minStack.length === 0) return "Stack in empty!";

                return this.minStack.pop()[0];
            }

            peek() {
                if (this.minStack.length === 0) return "Stack in empty!";

                return this.minStack[this.minStack.length - 1][0];
            }
            
            getMin() {
                if (this.minStack.length === 0) return "Stack in empty!";

                return this.minStack[this.minStack.length - 1][1];
            }
        } 
 
        // let minStack = new MinStack();

        // console.log(minStack.peek());
        // console.log(minStack.getMin());
        // console.log(minStack.pop());
        // minStack.push(11);
        // minStack.push(10);
        // minStack.push(15);
        // minStack.push(8);
        // minStack.push(2);
        // minStack.push(55);
        // console.log(minStack.peek());
        // console.log(minStack.getMin());
        // console.log(minStack.pop());
        // console.log("next");
        // console.log(minStack.peek());
        // console.log(minStack.getMin());
        // console.log(minStack.pop());
        // console.log(minStack.pop());
        // console.log(minStack.pop());
        // console.log(minStack.getMin());
        // console.log(minStack.pop());
        // console.log(minStack.pop());

        //T.C = O(1) but S.C = O(2n)

    //optimal approach

        class MinStackOptimal {
            constructor() {
                this.stack = [];
                this.minValue = Infinity;
            }

            push(x) {
                if (x < this.minValue) {
                    let newX = 2*x - this.minValue;
                    this.stack.push(newX);
                    this.minValue = x;
                } else {
                    this.stack.push(x);
                }

                console.log(this.stack);
            }

            pop() {
                if (this.stack.length === 0) return "Stack is empty!";

                if (this.stack[this.stack.length - 1] < this.minValue) {
                    let newPopped = this.minValue;
                    this.minValue = 2*this.minValue - this.stack.pop();

                    return newPopped;
                } else {
                    return this.stack.pop();
                }
            }

            peek() {
                if (this.stack.length === 0) return "Stack is empty!";

                if (this.stack[this.stack.length - 1] < this.minValue) {
                    return this.minValue;
                } else {
                    return this.stack[this.stack.length - 1];
                }
            }

            getMin() {
                if (this.stack.length === 0) return "Stack is empty!";

                return this.minValue;
            }
        }

        let minStack2 = new MinStackOptimal();

        // console.log(minStack2.peek());
        // console.log(minStack2.getMin());
        // console.log(minStack2.pop());
        // minStack2.push(11);
        // minStack2.push(10);
        // minStack2.push(15);
        // minStack2.push(8);
        // minStack2.push(2);
        // minStack2.push(55);
        // console.log(minStack2.peek());
        // console.log(minStack2.getMin());
        // console.log(minStack2.pop());
        // console.log("next");
        // console.log(minStack2.peek());
        // console.log(minStack2.getMin());
        // console.log(minStack2.pop());
        // console.log(minStack2.pop());
        // console.log(minStack2.pop());
        // console.log(minStack2.getMin());
        // console.log(minStack2.pop());
        // console.log(minStack2.pop());
        
        // T.C = O(1), S.C = O(n + 1) = O(n);

//Next greater element

    //Brute force

        function NgeBrute(arr){
            if (arr.length === 0) return "Array is empty!";
            let size = arr.length - 1;
            let ansArray = [];

            for (let i = 0; i <= size; i++) {
                for (let j = i + 1; j <= size; j++) {
                    if (arr[i] < arr[j])  {
                        ansArray[i] = arr[j];
                        break;
                    }
                }

                if (ansArray[i] === undefined) {
                    ansArray[i] = -1;
                }
            }

            return ansArray;
        }

        // console.log(NgeBrute([6,8,0,8,1,3]))

    //Optimal solution

        function NgeOptimal(arr) {
            if (arr.length === 0) return "Array is empty!";
            let n = arr.length;
            let stack = [];
            let ansArray = new Array(n);
            
            for (let i = n - 1; i >= 0; i--) {
                if (arr[i] < stack[stack.length - 1]) {
                    ansArray[i] = stack[stack.length - 1];
                    stack.push(arr[i]);
                } else {
                    for (let j = stack.length - 1; j >= 0; j--) {
                        if (stack[stack.length - 1] > arr[i]) break; 

                        stack.pop();
                    }

                    if (arr[i] < stack[stack.length - 1]) {
                        ansArray[i] = stack[stack.length - 1];
                        stack.push(arr[i])
                    } else {
                        ansArray[i] = -1;
                        stack.push(arr[i])
                    }
                    
                }

            }

            return ansArray;
        }

        // console.log(NgeOptimal([2,4,3,1,8,9,7,2,5,1,6,5]))

    //more shorter Optimal

        function NgeOptimal(arr) {
            if (arr.length === 0) return "Array is empty!";
            let n = arr.length;
            let stack = [];
            let ansArray = new Array(n);
        
            for (let i = n - 1; i >= 0; i--) {
                while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                    stack.pop(); // Remove smaller elements as they can't be the NGE
                }
                ansArray[i] = stack.length === 0 ? -1 : stack[stack.length - 1]; // Assign NGE or -1
                stack.push(arr[i]); // Push current element to stack
            }
        
            return ansArray;
        }
        
        // console.log(NgeOptimal([2,4,3,1,8,9,7,2,5,1,6,5]));

//Next greter element 2 (Circular array)

    //Brute force
        
        function FNGE1(arr) {
            if (arr.length === 0) return "Array is empty!";
            let size = arr.length;
            let ansArray = [];

            for (let i = 0; i <= size - 1; i++) {
                for (let j = i + 1; j <= size - 1; j++) {
                    if (arr[i] < arr[j]) {
                        ansArray[i] = arr[j];
                        break
                    }
                }
                if (ansArray[i] == undefined) {
                    for (let j = 0; j <= i - 1; j++) {
                        if (arr[i] < arr[j]) {
                            ansArray[i] = arr[j];
                            break
                        }
                    }
                }

                if (ansArray[i] == undefined) ansArray[i] = -1;
            }

            return ansArray;
        }

        // console.log(FNGE1([2,10,12,1,11]))
        // T.C = O(n^2) ans S.C = O(n)
        
    //Better solution

        function FNGE2(arr) {
            if (arr.length === 0) return "Array is empty!";
            let size = arr.length;
            let ansArray = [];

            for (let i = 0; i <= size - 1; i++) {
                for (let j = i + 1; j <= i + size - 1; j++) {
                    let index = j%size;

                    if (arr[i] < arr[index]) {
                        ansArray[i] = arr[index];
                        break;
                    }
                }

                if (ansArray[i] == undefined) ansArray[i] = -1;
            }

            return ansArray;
        }

        // console.log(FNGE2([2,10,12,1,11]));
        // T.C = O(n^2) ans S.C = O(n)

//optimal solution

        function FNGE3(arr) {
            if (arr.length === 0) return "Array is empty!";
            let n = arr.length;
            let ansArray = [];
            let stack = [];

            let count = 0;

            for (let i = 2*n - 1; i >= 0; i--) {
                
                while (stack.length > 0 && stack[stack.length - 1] <= arr[i%n]) {
                    stack.pop();
                    count++;
                }

                ansArray[i%n] = (stack.length == 0) ? -1 : stack[stack.length - 1];
                stack.push(arr[i%n]);
            }
            console.log(stack);
            console.log(count);
            return ansArray;
        }

        // console.log(FNGE3([15, 14, 13, 12, 11]));
        // O(2n + 2n) = O(4n) = O(n) and the S.c = O(n) + O(n) = O(2n) = O(n)

//Nearest smaller element

    //Brute Force 

        function NSE1(arr) {
            if (arr.length === 0) return "Empty ji";
            let n = arr.length;
            let ansArray = [];

            for (let i = 0; i <= n - 1; i++) {
                for (let j = i - 1; j >= 0; j--) {
                    if (arr[j] < arr[i]) {
                        ansArray[i] = arr[j];
                        break;
                    }
                }

                if (ansArray[i] == undefined) ansArray[i] = -1;
            }

            return ansArray;
        }

        // console.log(NSE1([4,5,2,10,8]));

        // T.C = O(n^2) and S.C = O(n);
        
    //Optimal solution

        
    function NSE2(arr) {
        if (arr.length === 0) return "Empty ji";
        let n = arr.length;
        let ansArray = [];
        let stack = [];

        for (let i = 0; i <= n - 1; i++) { 
            while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
                stack.pop();
            }

            ansArray = (stack.length < 0) ? -1 : stack[stack.length - 1];
            stack.push(arr[i]);
        }

        return ansArray;
    }

    // console.log(NSE1([4,5,2,10,8]));

//Traping rain water

    //Brute Force

        function prefixMax(arr) {
            let prefix = [];
            let n = arr.length;
            prefix[0] = arr[0];

            for (let i = 1; i < n; i++) {
                prefix[i] = Math.max(prefix[i - 1], arr[i]);
            }

            return prefix;
        }

        function suffixMax(arr) {
            let suffix = [];
            let n = arr.length;
            suffix[n - 1] = arr[n - 1];

            for (let i = n - 2; i >= 0; i--) {
                suffix[i] = Math.max(suffix[i + 1], arr[i]);
            }

            return suffix;
        }

        function trappedWater(arr) {
            if (arr.length === 0) return 0;
            let n = arr.length;
            let leftMax = prefixMax(arr);
            let rightMax = suffixMax(arr);
            let totalWater = 0;

            for (let i = 0; i <= n - 1; i++) {
                if (arr[i] < leftMax[i] && arr[i] < rightMax[i]){
                    totalWater += (Math.min(leftMax[i], rightMax[i]) - arr[i]);
                }
            }

            return totalWater;
        }

        // console.log(trappedWater([1,0,2,1,0,2,3,2,1,2,1]));

//Instead of using indexOf() use hashMap to store a value for each element of an array so when you need the value for a element in the array you can see the hashmap for that value which will take O(1) instead of maintainig another array for values for each index of your first array in which you will get index of the element then u will find that in your another array O(n).

//Next greater elements version 2

    //Brute force solution

        function NGE1V2(nums1, nums2) {
            if (nums1.length === 0 || nums2.length === 0) return;
                    let n2 = nums2.length;
                    let ansArray = new Array(nums1.length)
                    let stack = [];
                    let ngeArray = new Array(n2);
                    for (let i = n2 - 1; i >= 0; i--) {
                        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
                            stack.pop(); 
                        }
                        ngeArray[i] = stack.length === 0 ? -1 : stack[stack.length - 1]; 
                        stack.push(nums2[i]);
                    }
        
                    for (let i = 0; i <= nums1.length - 1; i++) {
                        let index = nums2.indexOf(nums1[i]);
                        ansArray[i] = ngeArray[index];
                    }
                
                    return ansArray;
        }
        
        // console.log(NGE1V2([1,3], [2,5,9,7,3,8,1]));

//Optimal solution

        function NGE2V2(nums1, nums2) {
            if (nums1.length === 0 || nums2.length === 0) return;
                    let n2 = nums2.length;
                    let ansArray = new Array(nums1.length)
                    let stack = [];
                    let ngeMap = new Map();
                
                    for (let i = n2 - 1; i >= 0; i--) {
                        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
                            stack.pop(); 
                        }
                        ngeMap.set(nums2[i], stack.length === 0 ? -1 : stack[stack.length - 1])
                        stack.push(nums2[i]);
                    }

                    for (let i = 0; i <= nums1.length - 1; i++) {
                        ansArray[i] = ngeMap.get(nums1[i]);
                    }

                    return ansArray;
        }

        // console.log(NGE2V2([1,3], [2,5,9,7,3,8,1]))   

//Number of next greater element

    //final as required by question T.C = O(queries*N), S.C = O(queries)

       function NUMNGE(N, arr, queries, indices) {
        let ansArray = [];
        
        for (let i = 0; i <= queries - 1; i++) {
            let count = 0;
            for (let j = indices[i] + 1; j <= N - 1; j++) {
                if (arr[indices[i]] < arr[j]) {
                    count++;
                }
            }
            
            ansArray[i] = count;
        } 
        
        return ansArray;
       }

       console.log(NUMNGE(5, [2,5,6,3,1], 3, [0,2,1]))


    