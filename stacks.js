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

class Queue {
    constructor() {
        this.queue = [];
    }

    //in JS there is no limit to the size of an array so we dont have any restriction of size.

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

let queue = new Queue();

// queue.enqueue(11);
// queue.enqueue(12);
// queue.enqueue(13);
// queue.enqueue(14);
// queue.enqueue(15);

console.log(queue.print());
console.log(queue.dequeue());
console.log(queue.front());

