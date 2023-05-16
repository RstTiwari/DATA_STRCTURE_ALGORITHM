/**
 * What are the enhanced Object literals
 */

const { log } = require("console");

let x = 30 ; y = 20 ; obj = {x,y} 
console.log(obj); // {x:30 ,y :20}

/**
 * Out put the following  Below stirng output;
 */

console.log("I  am the first guy"[0]); // I

/**
 * Destrcting of an array
 */
console.log(..."Rohit kuamr");

/**
 * Function with the rest parameter
 */

 function restParameter(a , b ,...c){
       console.log(+a + +b + +c); // 
 }

 restParameter(2,3,5)

 /**
  * What is the difference between a parameter and an argument
  */

 function myfunction (parameter1 ,parameter2,parameter3,parameter4){
    console.log(parameter1,parameter2,parameter3,parameter4); // this are  the parameter;
 }
myfunction("arguments1", "arguments2", "argument3" ) // these are the parameters of Fuunction

/**
 * concating Two or  more Array together;
 */

let array1 = [ 12,3, 4 ,5, 6];
let array2 = [13, 45,56,34];
let array3 = [12, 23, 23,234];

let concat = array1.concat(array2,array3);
console.log(concat); // adding all array together ;

/**
 * Shallow copy and Deep Copy
 */

// Shallow Copy
let newDetails = {
    name:"Rohit",
    class:12,
    add:"vasai"
}
let newDetails1 = newDetails ;
console.log(newDetails1); // { name: 'Rohit', class: 12, add: 'vasai' }

// now if update newDetails1  newDetail will be updated
newDetails1.name = "Amit"
console.log(newDetails);  // { name: 'Amit', class: 12, add: 'vasai' }  name is updated

// Deep Copy
let myDetails = {
  name: "Rohit",
  class: 12,
  add: "vasai",
};
let myDetails2 = {
  name: myDetails.name,
  class: myDetails.class,
  add: myDetails.add,
};

console.log(myDetails2); //  { name: 'Rohit', class: 12, add: 'vasai' }

// nwo even thogh if i updated the value of myDetails2 myDetails will reamin the Same

myDetails.name ="Kumar";
console.log(myDetails2); //  { name: 'Rohit', class: 12, add: 'vasai' }