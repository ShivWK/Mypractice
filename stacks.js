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

const stack = new Stack(3);

stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.push(15);
stack.print();

