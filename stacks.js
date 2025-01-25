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

        let myQStack = new StacksByQueue();
        myQStack.push(11);
        myQStack.push(12); 
        myQStack.push(13); 
        myQStack.push(14); 
        console.log(myQStack.peek());
        console.log(myQStack.pop());
        myQStack.push(15);
        console.log(myQStack.pop());
        console.log(myQStack.pop());
        console.log(myQStack.pop());
        console.log(myQStack.pop());
        console.log(myQStack.pop());

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

