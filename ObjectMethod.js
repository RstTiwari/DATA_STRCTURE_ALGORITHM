const { log } = require("console");

/*
Object.assign("target","source",...sourceN) 
*/  
const target = { a: 1, b: 2,e:2 };
const source = { b: 4, c: 5 };
let returnObject = Object.assign(target,source)
console.log(target);
// Copy the given Object
let copyObject = Object.assign({},source)
console.log(copyObject);

target.a = {a:2}
console.log(target);
target.a.a = {b:4}

/**
 Object.create(proto ,propertyObject)
 */

const person = {
     isHuman: false,
     printIntroduction: function () {
         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
     },
 };

let rohit = Object.create(person)
rohit.name = "rohit"
rohit.isHuman = trues
console.log(rohit.printIntroduction());
  

