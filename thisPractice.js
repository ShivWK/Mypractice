

let obj = {
    name : "Shivendra",
    show() {
        console.log(this); 
    }
}

obj.show(); // obj

function showThis() {
    console.log(this);
}

showThis(); // global object


