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

// console.log(spliptIt([{name: "banana" , quantity: 2}, {name: "carrat" , quantity: 3}]))

//flatening nested arrays

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

   let customers = [
      {
         username : "Shivendra",
         orders : [
            {item : "perse", amounr : 1500},
            {item : "phone", amounr : 20000},
            {item : "charger", amounr : 800},
            {item : "cover", amounr : 4000},
         ]
      },
   ]

   console.log(flarter(customers));