function spliptIt(arr) {
    let ansArray = [];
    arr.map(object => {
          if (object.quantity > 1) {
            for (let i = 0; i < object.quantity; i++) {
               ansArray.push({ name: object.name, quantity: 1 })
            }
           } else {
              ansArray.push(object);
           }
        })

    return ansArray;
}

//console.log(spliptIt([{name: "banana" , quantity: 2}, {name: "carrat" , quantity: 3}]))

//flatening nested arrays

let customers = [
   {
      username : "Shivendra",
      orders : [
         {item : "perse", amount : 1500},
         {item : "phone", amount : 20000},
         {item : "charger", amount : 800},
         {item : "cover", amount : 4000},
      ]
   },
   {
      username : "Devendra",
      orders : [
         {item : "perse", amount : 1500},
         {item : "phone", amount : 20000},
         {item : "charger", amount : 800},
         {item : "cover", amount : 4000},
      ]
   },
]

   function flarter(arr) {
      let answer = [];

      for (let customers of arr) {
         let {username, orders} = customers;

         for (let order of orders) {
            answer.push({
               username,
               ...order
            })
         }
      }

      return answer;
   }

   function flater2(customers){
      let flattenedArray = [];
    
      for (let i = 0; i < customers.length; i++) {
        //we got first customers object
        
        let customer = customers[i];
    
        //iterating over the orders array
        
        for (let j = 0; j < customer.orders.length; j++){
          flattenedArray.push({
            username: customer.username,
            item: customer.orders[j].item,
            amount: customer.orders[j].amount
          })
        }
      }
    
      return flattenedArray;
    }

   // console.log(flater2(customers));

let a = 0;

function count()
{
  return a++
}

count.reset = function() {
   a = 0;
}

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// count.reset();
// console.log(count());
// console.log(count());

//Multiplyer function

   function multiplyer(factor) {
      return function(x) {
         return factor*x;
      }
   }

   let multipyBy2 = multiplyer(2);

   // console.log(multipyBy2(4))
   // console.log(multipyBy2(5))
   // console.log(multipyBy2(6))
   // console.log(multipyBy2(7))

// Value of 'this' practice

        // Inside a regular function non strict mode

          // in global

         //  function inGlobal() {
         //    console.log(this);
         //  }

         //  inGlobal();

      //   // Inside an object
      //     let name = "Outside"

      //     let obj1 = {
      //       name : "Inside",
      //       show : function() {
      //         console.log(this);
      //       }
      //     }

      //     obj1.show()

      //   // Inside nested function

      //     function first() {
      //       function second() {
      //         console.log(this);
      //       }

      //       second()
      //     }

      //     // first.name = "Inside first function";

      //     first()

      //     let obj2 = {
      //       name : "Inside",
      //       first : function() {
      //         function second() {
      //           console.log(this);
      //         }

      //         second();
      //       }
      //     }

      //     obj2.first();

// Find the missing number in the array of consecutive integers

   //Works only for increasing arrays
   function findMissingNum(arr) {
      let firstIndexNum = arr[0];
      firstIndexNum++;
      let arrlength = arr.length;

      for (let i = 1; i < arrlength; i++) {
         if (arr[i] !== firstIndexNum) return firstIndexNum; 

         firstIndexNum++;
      }

      return null;
   }

   // console.log(findMissingNum([2,3,4,5,6,7])); //null
   // console.log(findMissingNum([2,4,5,6,7])); //3 O(n)

   //Works for both increasing and decreasing arrays
   function findMissingNum(arr) {
      let isAscending = arr[0] < arr[arr.length - 1]; 
      let expectedNum = arr[0] + (isAscending ? 1 : -1); 
      let arrLength = arr.length;
  
      for (let i = 1; i < arrLength; i++) {
          if (arr[i] !== expectedNum) return expectedNum;
          expectedNum += isAscending ? 1 : -1;
      }
  
      return null; 
  }
  
//   console.log(findMissingNum([2, 3, 4, 5, 6, 7])); // null (no missing number)
//   console.log(findMissingNum([2, 4, 5, 6, 7])); // 3 (increasing order)
//   console.log(findMissingNum([7, 6, 4, 3, 2])); // 5 (decreasing order) //O(n)
  
// Array methods practice

  //Filter inplace
  const filterInplace = (arr, a, b) => {
      let n = arr.length;

      for (let i = 0; i < n; i++) {
         if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
         }
      }

      return arr;
  }

//   console.log(filterInplace([5, 26, 8, 9, 2, 1, 0], 2, 10)) //O(n^2)

  // Better solution

      const filterInplace2 = (arr, a, b) => {
         let index = 0;
         let n = arr.length;

         for (let i = 0; i < n; i++) {
            if (arr[i] >= a && arr[i] <= b) {
               arr[index] = arr[i];
               index++;
            }
         }

         arr.length = index;
         return arr;
      }

      // console.log(filterInplace2([5, 26, 8, 9, 2, 1, 0], 2, 10)) //O(n)

   //Extendable object 
      
      function Calculater() {
         this.methods = {
            "+" : (a, b) => a + b,
         };

         this.calculate = function(str) {
            let arr = str.split(" ");
            let a = +arr[0];
            let op = arr[1];
            let b = +arr[2];

            if (isNaN(a) || isNaN(b) || !this.methods[op]) {
               return NaN;
            }

            return this.methods[op](a, b);
         };

         this.addMethods = function(name, func) {
            this.methods[name] = func;
         };
      }

      let obj = new Calculater();
      // console.log(obj.calculate("2 + 6"));

      obj.addMethods("**", (a, b)=>a**b);
      // console.log(obj.calculate("2 ** 4"));

 // Object from and array

      function objFromArray(arr) {
         return arr.reduce((obj, crr)=> {
            obj[crr.id] = crr;
            return obj;
         }, {})
      }

      // console.log(objFromArray([
      //    {id : "John", name : "John cena", age: 48},
      //    {id : "Randy", name : "Randy Ortan", age: 50},
      //    {id : "Brock", name : "Brock Leasner", age: 52},
      //    {id : "Big", name : "Big Show", age: 62},
      //    {id : "Under", name : "Under Taker", age: 82}
      // ]))

      // console.log([[1,2,3],[4,5,6],[7,8,9], [1,[3,4, [5,6]]]].toString())

   //Practicing Number and MAths funtions

      let num = 155;

      console.log(num.toString());  // "155"
      console.log( num.toString(16) );  // "9b"
      console.log( num.toString(2) );   // "10011011"

   
      console.log( isNaN(45) ); // false
      console.log( isNaN("string") ); // true
      console.log( isNaN(undefined) ); // true

      console.log( Number.isNaN(45) ); // false
      console.log( Number.isNaN("45") ); // false
      console.log( Number.isNaN(undefined) ); // false

      console.log(parseInt("42")); // 42
      console.log(parseInt("42.99")); // 42 
      console.log(parseInt("101", 2)); // 5 (binary to decimal)
      console.log(parseInt("abc")); // NaN 

      console.log(parseFloat("42.99")); // 42.99
      console.log(parseFloat("42")); // 42 
      console.log(parseFloat("3.14abc")); // 3.14 
      console.log(parseFloat("abc")); // NaN

      console.log(Math.floor(4.9));  // 4
      console.log(Math.floor(4.1));  // 4
      console.log(Math.floor(-4.1)); // -5
      console.log(Math.floor(-4.9)); // -5

      console.log(Math.ceil(4.1));  // 5
      console.log(Math.ceil(4.9));  // 5
      console.log(Math.ceil(-4.1)); // -4
      console.log(Math.ceil(-4.9)); // -4

      console.log(Math.min(5, 2, 8, 1)); // 1
      console.log(Math.min(-10, 0, 20, -5)); // -10
      console.log(Math.min()); // Infinity

      console.log(Math.max(5, 2, 8, 1)); // 8
      console.log(Math.max(-10, 0, 20, -5)); // 20
      console.log(Math.max()); // -Infinity

      console.log(Math.random()); // 0.908883683249599
      console.log(Math.random() * 10); // 4.305273940090042
      console.log(Math.floor(Math.random() * 10)); // 5
      console.log(Math.floor(Math.random() * 100) + 1); //78

      console.log(Math.round(4.3)); // 4
      console.log(Math.round(4.7)); // 5
      console.log(Math.round(4.5)); // 5
      console.log(Math.round(-4.5)); // -4


      console.log(Math.pow(2, 3));  // 8
      console.log(Math.pow(10, -1)); // 0.1

      console.log(Math.trunc(4.9));  // 4
      console.log(Math.trunc(-4.9)); // -4
      console.log(Math.trunc(0.99)); // 0
      console.log(Math.trunc(-0.99)); // -0

      console.log(Math.sqrt(25)); // 5 
      console.log(Math.sqrt(49)); // 7 
      console.log(Math.sqrt(0)); // 0 
      console.log(Math.sqrt(-4)); // NaN 

      console.log(Math.cbrt(27)); // 3  
      console.log(Math.cbrt(64)); // 4   
      console.log(Math.cbrt(-8)); // -2 
      console.log(Math.cbrt(0));  // 0

      console.log(Object.is(10, 10)); // true
      console.log(Object.is(5, "5")); // false

      console.log(Number("42"));    // 42
      console.log(Number("Hello")); // NaN
      console.log(Number(null));    // 0
      console.log(Number(undefined)); // NaN

      console.log(+"42");    // 42 (string to number)



      



