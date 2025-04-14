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

   //    let num = 155;

   //    console.log(num.toString());  // "155"
   //    console.log( num.toString(16) );  // "9b"
   //    console.log( num.toString(2) );   // "10011011"

   
   //    console.log( isNaN(45) ); // false
   //    console.log( isNaN("string") ); // true
   //    console.log( isNaN(undefined) ); // true

   //    console.log( Number.isNaN(45) ); // false
   //    console.log( Number.isNaN("45") ); // false
   //    console.log( Number.isNaN(undefined) ); // false

   //    console.log(parseInt("42")); // 42
   //    console.log(parseInt("42.99")); // 42 
   //    console.log(parseInt("101", 2)); // 5 (binary to decimal)
   //    console.log(parseInt("abc")); // NaN 

   //    console.log(parseFloat("42.99")); // 42.99
   //    console.log(parseFloat("42")); // 42 
   //    console.log(parseFloat("3.14abc")); // 3.14 
   //    console.log(parseFloat("abc")); // NaN

   //    console.log(Math.floor(4.9));  // 4
   //    console.log(Math.floor(4.1));  // 4
   //    console.log(Math.floor(-4.1)); // -5
   //    console.log(Math.floor(-4.9)); // -5

   //    console.log(Math.ceil(4.1));  // 5
   //    console.log(Math.ceil(4.9));  // 5
   //    console.log(Math.ceil(-4.1)); // -4
   //    console.log(Math.ceil(-4.9)); // -4

   //    console.log(Math.min(5, 2, 8, 1)); // 1
   //    console.log(Math.min(-10, 0, 20, -5)); // -10
   //    console.log(Math.min()); // Infinity

   //    console.log(Math.max(5, 2, 8, 1)); // 8
   //    console.log(Math.max(-10, 0, 20, -5)); // 20
   //    console.log(Math.max()); // -Infinity

   //    console.log(Math.random()); // 0.908883683249599
   //    console.log(Math.random() * 10); // 4.305273940090042
   //    console.log(Math.floor(Math.random() * 10)); // 5
   //    console.log(Math.floor(Math.random() * 100) + 1); //78

   //    console.log(Math.round(4.3)); // 4
   //    console.log(Math.round(4.7)); // 5
   //    console.log(Math.round(4.5)); // 5
   //    console.log(Math.round(-4.5)); // -4


   //    console.log(Math.pow(2, 3));  // 8
   //    console.log(Math.pow(10, -1)); // 0.1

   //    console.log(Math.trunc(4.9));  // 4
   //    console.log(Math.trunc(-4.9)); // -4
   //    console.log(Math.trunc(0.99)); // 0
   //    console.log(Math.trunc(-0.99)); // -0

   //    console.log(Math.sqrt(25)); // 5 
   //    console.log(Math.sqrt(49)); // 7 
   //    console.log(Math.sqrt(0)); // 0 
   //    console.log(Math.sqrt(-4)); // NaN 

   //    console.log(Math.cbrt(27)); // 3  
   //    console.log(Math.cbrt(64)); // 4   
   //    console.log(Math.cbrt(-8)); // -2 
   //    console.log(Math.cbrt(0));  // 0

   //    console.log(Object.is(10, 10)); // true
   //    console.log(Object.is(5, "5")); // false

   //    console.log(Number("42"));    // 42
   //    console.log(Number("Hello")); // NaN
   //    console.log(Number(null));    // 0
   //    console.log(Number(undefined)); // NaN

   //    console.log(+"42");    // 42 (string to number)

   // //Testing [Symbol.iterator] method existance in the Array
   //    let arr = [1,2,3];

   //    let re = arr[Symbol.iterator]();

   //    console.log(re.next())
   //    console.log(re.next())
   //    console.log(re.next())
   //    console.log(re.next())

   // Tricky question

      // "use strict";
      // let myObject = {
      // innerWidth: "10",
      // myFunction: () => console.log(this),
      // myFunction2: function myTricky() {console.log(typeof this.innerWidth)},
      // };

      // myObject.myFunction();
      // myObject.myFunction2();

   // Array Methods

      // let arr = [1,2,3,4];
      
      // console.log(arr.push(7)); // 5 (length)
      // console.log(arr) // [1, 2, 3, 4, 7]
      // console.log(arr.pop()); // 7 (removed element)
      // console.log(arr) // [1, 2, 3, 4]

      // console.log(arr.shift()) // 1 (removed element)
      // console.log(arr) // [2, 3, 4]
      // console.log(arr.unshift(9, 3)) // 5 (length)
      // console.log(arr) // [9, 3, 2, 3, 4]

      // let arr1 = [1, 2, 3, 4];

      // console.log(arr1.splice(1, 2, 5, 6)); // [2, 3] (removed elements)
      // console.log(arr1); // [1, 5, 6, 4] (replace)
      // console.log(arr1.splice(1, 2)) // [5, 6] (removed element)
      // console.log(arr1); // [1, 4] (replace)
      // console.log(arr1.splice(1, 0, 2, 3)) // [] (no removed element)
      // console.log(arr1); // [1, 2, 3, 4] (insert)

      // let arr2 = [10, 20, 30, 40, 50];
      // let newArr = arr2.slice(1, 4);
      // console.log(newArr); // [20, 30, 40]
      // console.log(arr2);    // [10, 20, 30, 40, 50] (original remains unchanged)

      // let arr1 = [1, 3, 4];
      // console.log(arr1.some(num => num % 2 === 0)); // true

      // let arr2 = [2, 4, 6];
      // console.log(arr2.every(num => num % 2 === 0)); // true

      // let arr = ["a", "b", "c"];
      // console.log(arr.join("-")); // "a-b-c"
      
      // let arr = [1, 2, 3, 2];
      // console.log(arr.includes(2)); // true
      // console.log(arr.includes(4)); // false

      // console.log(arr.indexOf(2)); // 1

      // console.log(arr.lastIndexOf(2)); // 3

      // let arr = [1, 2, 3, 4, 3];
      // console.log(arr.find(num => num > 2)); //3
      // console.log(arr.find(num => num > 5)); //undefined

      // console.log(arr.findIndex(num => num > 2)); //2
      // console.log(arr.findIndex(num => num > 5)); //-1

      // console.log(arr.findLastIndex(num => num > 2)); // 4 (last occurrence of 3)
      // console.log(arr.findLastIndex(num => num > 5)); // -1 (last occurrence of 3)

// spread with objects

      // let obj1 = {
      //    a : 1,
      //    b : {
      //       c : 2
      //    }
      // }
    
      // let copy = {...obj1};
      // copy.b.c = 3;
      // console.log(obj1);

// Practice array methods 

      // let arr1 = [1, 2, 3, 4];
      // console.log(arr1.filter(num => num % 2 === 0)); // [2, 4]
      // console.log(arr1.map(num => num * 2)); // [2, 4, 6, 8]

      // let arr2 = [5, 6];
      // console.log(arr2.concat(arr1)); // [1, 2, 3, 4, 5, 6]

      // let arr3 = [100, 2, 25, 10, 1];
      // console.log(arr3.toString()) // 100,2,25,10,1

      // console.log(arr3.sort()); // [ 1, 10, 100, 2, 25 ]
      // console.log(arr3.sort((a, b) => a - b)); // [ 1, 2, 10, 25, 100 ]
      // let arr4 = ['f', 'a', 'd', 'b']
      // console.log(arr4.sort()) // [ 'a', 'b', 'd', 'f' ]
      // console.log(arr4); // [ 'a', 'b', 'd', 'f' ] (original array modified)

      // console.log(arr4.reverse()); // [ 'f', 'd', 'b', 'a' ]

      // let arr5 = [1, [2, [3, 4]]];
      // console.log(arr5.flat(2)); // [1, 2, 3, 4]

      // let arr6 = [1, 2, 3];
      // console.log(arr6.flatMap(num => [num, num * 2])); // [1, 2, 2, 4, 3, 6]

      // let arr7 = [1, 2, 3, 4];
      // let sum = arr7.reduce((acc, num) => acc + num, 0);
      // console.log(sum); // 10

      // let arr8 = [10, 20, 30, 40];
      // console.log(arr8.at(-1)); // 40 (last element)

      // let arr9 = new Array(5);
      // console.log(arr9); // [ <5 empty items> ]
      // console.log(arr9.fill(0)); // [0, 0, 0, 0, 0]

      // let arr10 = [1, 2, 3, 4, 5]; 
      // console.log(arr10.fill(9, 1, 4)); // [1, 9, 9, 9, 5]

      // console.log(Array.isArray([2,3,5])); // true
      // console.log(Array.isArray({})); // false

// Set and map tasks

   // Filter unique members

      let arr = ["Hare", "Krishna", "Hare" , "Krishna", "Krishna", "Krishna", "Hare", "hare", "shiv"];

      function uniqueElements(arr) {
         let uniqueSet = new Set(arr);
         return Array.from(uniqueSet);
      }

      // console.log(uniqueElements(arr));

   // Spread on objects
      let obj1 = {
         name : "Shivendra",
         obj : {
            hellow : "hi"
         }
      }

      let obj2 = {...obj1}
      // console.log(obj2);

   // Filter ansgrams

      // console.log("teacher".split("").sort().join(''));

      function filterAnagrams(arr) {
         let myMap = new Map();

         for(let value of arr) {
            let sorted = value.toLowerCase().split("").sort().join("");
            myMap.set(sorted, value);
         }

         return Array.from(myMap.values());
      }

      // console.log(filterAnagrams(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]));

   // Senirio based

      // problem below code doesnt work

         let map = new Map();
         map.set("name", "John");

         let key = map.keys();

         // key.push("more"); // Error: key is not a function. This is because .keys() returns an iterable not a array so push() and other array methods are not available to key.
         
      //Solution1 : making the return of map.keys() an array

         let map1 = new Map();
         map1.set("name", "John");

         let key1 = [...map1.keys()]; //Now an array

         key1.push("more");
   
         // console.log(key1);

      //Solution2 

         let map2 = new Map();
         map2.set("name", "John");

         let key2 = [...map2.keys()]; //Now an array

         key2.push("more");

         // console.log(key1);

// Object.* methods

      let obj3 = {
         name : "Shivendra",
         cast : "Dwivedi",
      }

      // console.log(Object.keys(obj3));
      // console.log(Object.values(obj3));
      // console.log(Object.entries(obj3));

   // Applying array methods on the objects

      function applyMethod(obj) {
         let arrayObj = Object.entries(obj);
         let newArrayObj = arrayObj.map(value => [value[0], value[1]*2]);
         return Object.fromEntries(newArrayObj);
      } 

      let obj4 = {
         apple : 2,
         banana : 3,
         graps : 5,
      }

      // console.log(applyMethod(obj4))

// Destructuring assignment

      let title1, width1, age1;

      let obj10 = {
         title1 : "Shivendra",
         width1 : 25,
         age1 : 26
      };

      ( { title1, width1, age1 } = obj10 );

      // console.log(title1);
      // console.log(width1);
      // console.log(age1);

//JSON methods

      // console.log(JSON.stringify({a: "Shiv", age : 26}));
      // console.log(JSON.stringify([1,2,3,4,5]));
      // console.log(JSON.stringify(null));
      // console.log(JSON.stringify(undefined));
      // console.log(JSON.stringify(true));
      // console.log(JSON.stringify('Shivendra'));
   
      let user = {
         show() {
            console.log("HI");
         },
         [Symbol("id")] : 123,
         crime: undefined,
         status: "Kuchh nahi"
      }

      // console.log(JSON.stringify(user));

      let second = {
         bro : 25
      }

      let first = {
         name: "Shivendra",
         age: 26,
      }

      first.bhai = second;
      second.bhaiya = first;

      // console.log(JSON.stringify(first)); // TypeError: Converting circular reference

      let result = JSON.stringify(first, function(key, value) {
         if (key !== "" && value === first) return undefined
         return value;
      })

      // console.log(result);
      
      let user2 = {
         name : "Shivendra",
         age : 26,
         toJSON() {
            return  "Kuchh nahi milega";
         }
      }

      // console.log(JSON.stringify(user2)); //"Kuchh nahi milega"

      let date = {
         today: new Date(),
      }

      // console.log(JSON.stringify(date)); // date is string and resolved
      
      // console.log(JSON.parse(JSON.stringify(date))) // converted double qouted to single qouted
      
      // console.log(JSON.parse(JSON.stringify(date)).today.getDate()) //TypeError


      // console.log(JSON.parse({a: "Shiv", age : 26}));
      // console.log(JSON.parse([1,2,3,4,5]));
      // console.log(JSON.parse(null));
      // console.log(JSON.parse(undefined));
      // console.log(JSON.parse(true));
      // console.log(JSON.parse('Shivendra'));
      // console.log(JSON.parse("[1]")); // works 

      let result2 = JSON.parse(JSON.stringify(date), function(key, value) {
         if (key === "today") return new Date(value);
         return value;
      });

      // console.log(result2);
      // console.log(result2.today.getDate()) //worked

// Rest param and spread syntax

      let object1 = {
         name : "Shivendra",
         age: 26
      }
      // console.log({...object1}) // Works on object spread
      // console.log([...object1]) // TypeError: needs and iterable for array spread so wont work

      let object2 = {...object1}

      // console.log(JSON.stringify(object1) === JSON.stringify(object2)) // true
      // console.log(object1 === object2); // false

// RegExp

      let regex = new RegExp("^\\d", "gm");
      let regex2 = /^\d/gm;

      let str = "1st 5Hellow\n2nd Hi\n3rd Namestey";

      // console.log(str.match(regex2));
      // console.log(str.match(/^\d/gm))

      let str2 = "1 \n2 \n3 ";
      console.log(str2.match(/^\d\s$/gm));

      let regex3 = new RegExp("\\d\\/\\d+", "g");
      let str3 = "2/5 hi I'm Shivendra 5/10";
      // console.log(str3.match(regex3));

      let regex4 = new RegExp("(\\d\\(\\))+", "g");
      let str4 = "5() 6() 8()";
      // console.log(str4.match(regex4))

      let regex5 = /\d\/\d+/g;
      // console.log(str3.match(regex3));

      let regex6 = /(\d\(\))+/g;
      // console.log(str4.match(regex4));

      let regex7 = /(\d\(\))+/g;
      let str5 = "5() 6() 8()";
      // console.log(str5.match(regex7)) // [ '5()', '6()', '8()' ]

   // Carousel examples

      // global flag (g)
      console.log("123abc".match(/\d/)); // [ '1' ]
      console.log("123abc".match(/\d/g)); // [ '1', '2', '3' ]

      // ignore case flag (i)
      console.log("Hello".match(/hello/)); // null
      console.log("Hello".match(/hello/i)); // [ 'Hello' ]

      // multiline flag (m)
      console.log("first\nsecond".match(/^second/)); // null
      console.log("first\nsecond".match(/^second/m)); // [ 'second' ]

      // dotAll flag (s)
      console.log("hello\nworld".match(/hello.world/)); // null
      console.log("hello\nworld".match(/hello.world/s)); // [ 'hello\nworld' ]

      // unicode flag (u)
      console.log('💖'.match(/\u{1F496}/));  // null
      console.log('💖'.match(/\u{1F496}/u));  // [ '💖' ]

      // sticky flag (y)
      console.log('💖'.match(/\u{1F496}/));  // null
      console.log('💖'.match(/\u{1F496}/u));  // [ '💖' ]

