/*Here i will keep the track of the most imp questuon that are gonna be 
asked in Javasript Interview Question with much more going into the depth of questions*/

const { use } = require("express/lib/application");

/**
 * Q ) What are the possible ways to create objects in JavaScript
 */

const obj = new Object(); // object constructor with new
const obj1 = { name: "rohit" }; // object literal syntax
const obj2 = Object.create(obj1); //object create method

// function consturctor method
function createObject(name) {
    this.name = name;
    this.age = 21;
}
const user = new createObject("rohit")

// class prototype based method
class classPrptotypeBaseObject {
    constructor(name,age){
        this.name = name,
        this.age = age
    }
}

const classPrototype = new classPrptotypeBaseObject("rohit",203)
console.log(classPrototype,"--");

//object assign Typec
const assignObject = {name:"Rohit",scholl:"Sir jp high scholl"}
const newAssignedObject = Object.assign(assignObject)
console.log(newAssignedObject,"--");//{ name: 'Rohit', scholl: 'Sir jp high scholl' } --


/**
 * Apply Method 
 * ==> appy method is used to call fucntion can arguemnts pass as and array 

 */

//Eg

function calculateTotalAmount() {
    console.log(this,"this--");
    let total = 0;
    this.items.forEach((item) => {
        total += item.price;
    });
    return total;
}
const cart = {
    items:[
        { name: "Product 1", price: 20 },
        { name: "Product 2", price: 30 },
    ]
}


const order = {
    items: [
        { name: "Product 3", price: 25 },
        { name: "Product 4", price: 35 },
    ],
};

const cartTotal = calculateTotalAmount.apply(cart)
const orderTotal = calculateTotalAmount.apply(order)  // we can pass array or object
console.log(cartTotal,);  // 50


/*
* Call   
* ==> call method can be called on the fucntion with any number of params passed single handed with commas
*/



function  calculateDiscountedPrice(discountPerce){
       console.log("htis",this)
        const discountPrice = this.price*(1 - discountPerce/100) 
        return Math.ceil(discountPrice)
    }
const product1 = {name:"shirt",price:1203}

const discountPercent = 20
const dicountedPrice = calculateDiscountedPrice.call(product1,discountPercent)
console.log(dicountedPrice,"---");


/***
 * 
 * Diffrecne in ==  and ====
 */
console.log(null == null) // true
console.log(null === null); // true

console.log(undefined == undefined); // true
console.log(undefined === undefined); // true

console.log(0 == false);   // true
console.log(0 === false);  //false

console.log('0' == false); // true
console.log('0'=== false); // false

console.log(false == false);// true
console.log(false == "false"); // false
console.log(false === false); // true

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log([] == []); // false diffrent memory location


/**
 * Currying Fucntion 
 * 
 */


















