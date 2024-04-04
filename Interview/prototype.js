/*
IN oops chapter learn about using Classical oops concpet in js as simliar in C++ and Java 
*/

/**
 * But js Follows the Prototypal based Oops concept
 */

/**
 * Here is an example how can be used  with prototypla based
 *
 */

// Contructor based

function Person(name) {
    this.name = name;
}

Person.prototype.introduceSelf = function () {
    console.log(`Hi im ${this.name}`);
};

const person1 = new Person("Rohit");
const person2 = new Person("Ram");

person2.introduceSelf(); ///Hi im Ram

// Proffesor Consturctor

function Proffesor(name, subject) {
    this.name = name;
    this.subject = subject;
}

Proffesor.prototype.teaches = function () {
    console.log(`I m Proffesor i teach ${this.subject}`);
};


const mathProffessor = new Proffesor("mathsir","bilogy")
mathProffessor.teaches()


//  same way we can create Student instacne as weill





  /**************************************** */
  // _proto__ and prototype

  // __proto__
const obj = {}
console.log(obj.__proto__)//[Object: null prototype] {}
console.log(obj.prototype);  // undefined baecase not assoicates directly on objects ,

//__prototype

const prototypeFunction  = ()=>{
}
console.log(prototypeFunction.prototype); // undefined   beacse its not funtion its object bases arrao fucniton


function prototypeFunction1 (){

}

console.log(prototypeFunction1.prototype); //  {}    because in js every this obj

console.log(prototypeFunction1 instanceof Object);

const prototypeFunction1Instance = new prototypeFunction1()
console.log(prototypeFunction1Instance.prototype); // false becase prototype is  property of constructor function not a instance method