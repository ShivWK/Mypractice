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

console.log(count());
console.log(count());
console.log(count());
console.log(count());
count.reset();
console.log(count());
console.log(count());

// //Multiplyer function

//    function multiplyer(factor) {
//       return function(x) {
//          return factor*x;
//       }
//    }

