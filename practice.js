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

   console.log(findMissingNum([2,3,4,5,6,7])); //null
   console.log(findMissingNum([2,4,5,6,7])); //3

   //Works for both increasing and decreasing arrays
   function findMissingNum(arr) {
      let isAscending = arr[0] < arr[arr.length - 1]; 
      let expectedNum = arr[0] + (isAscending ? 1 : -1); 
  
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] !== expectedNum) return expectedNum;
          expectedNum += isAscending ? 1 : -1;
      }
  
      return null; 
  }
  
  console.log(findMissingNum([2, 3, 4, 5, 6, 7])); // null (no missing number)
  console.log(findMissingNum([2, 4, 5, 6, 7])); // 3 (increasing order)
  console.log(findMissingNum([7, 6, 4, 3, 2])); // 5 (decreasing order)
  

