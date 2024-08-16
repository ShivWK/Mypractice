import { user} from './script1.js';



let id2 = Symbol("id2");

// alert(id2.toString())
// alert(id2.description)
user[id2] = "sahil";
// console.log(user[id2])

for(let ob in user) {
    console.log(ob);
}
