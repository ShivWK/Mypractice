//Object creatation by constructor function

        // function User(name) {
        //     this.name = name;
        //     this.isAdmin = false;
        // }
  
        // let mine = new User('shiv') ;
        // console.log(mine.name);
        // console.log(mine.isAdmin);

    //Example of new.target use to save when new keyword is not used by the user     

        // function User(name) {

        //     if(!new.target) {
        //         return new User(name);
        //     }

        //     this.name = name;
        //     this.isAdmin = false;
        // }

    //imidiately called constructor function

        // let mine = new function() {
        //     this.name = "shivendra";
        //     this.isAdmin = false; 
        // }
        // console.log(mine.name);
        // console.log(mine.isAdmin);

    //constructer function call without () paranthesis //not a good practice

        // function User() {
        //     this.name = "shivendra";
        //     this.isAdmin = false;
        // }
  
        // let mine = new User;
        // console.log(mine.name);
        // console.log(mine.isAdmin);

    //constructer function with explicit return

        // function User(name) {
        //     this.name = name;
        //     this.isAdmin = false;

        //     // return { name : "Godzila"};
        //     // return;
        //     // return 2 + 3;
        // }
  
        // let mine = new User("shivendra");
        // console.log(mine.name);
        // console.log(mine.isAdmin);
    
    //method in constructer function

        // function User(name) {
        //     this.name = name;
        //     this.isAdmin = false;

        //     this.sayHi = function() {
        //         console.log("hi");
        //     }
        // }
  
        // let mine = new User("shivendra");
        // console.log(mine.name);
        // console.log(mine.isAdmin);
        // console.log(mine.sayHi());

    //Calculater constructer function

        // function Calculater(){
        
        //     this.read = function() {
        //         this.a = +prompt("give the first value a", '');
        //         this.b = +prompt("give the second value b", '');
        //     }

        //     this.sum = function() {
        //         return this.a + this.b;
        //     }

        //     this.multiply = function() {
        //         return this.a * this.b;
        //     }
        // }

        // let calc = new Calculater;
        // calc.read();
        // console.log("sum is :", calc.sum());
        // console.log("product is : ",calc.multiply());

    //Accumulator
    
        // function Accumulator(staringValue) {
        //     this.value = staringValue;

        //     this.read = function() {
        //         this.value += +prompt("give the value :", 0);
        //     };
        // } 
        
        // let acc = new Accumulator(2);
        // acc.read();
        // alert(acc.value);

    //Two function one object, object created from two constructer functions can be equal
        // let obj = {};
        // function SameObjectA() { return obj;}
        // function SameObjectB() { return obj;}

        // let user1 = new SameObjectA;
        // let user2 = new SameObjectB;

        // console.log(user1 === user2)
        
    //Controvercy   
        // let obj = {};
        // console.log(obj == "[object Object]");

    //Symboll Practice

    export let user = {
        id : "shivendra"
    }

    export let id2 = Symbol("id2");
    user[id2] = "Dwivedi";

