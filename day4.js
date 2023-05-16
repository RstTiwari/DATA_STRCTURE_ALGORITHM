/**
 extending the Method of Parent Component in Child Component;
 */

 let obj = {
   length: 10,
   width: 20,
 };
 let obj1 = {
   height: 20,
 };

 class parentComponent{
    constructor(obj){
        this.length = obj.length,
        this.width = obj.width
    }

    tringleArea(){
        console.log("parent tringle0 Methods call");
        return (1/2*(this.length*this.width))
    }
 }

 let parent = new parentComponent(obj);

 class childComponent extends parentComponent{
    constructor(obj ,obj1){
        super(obj);
        this.height = obj1.height

    }
    tringleArea(){
      return super.tringleArea()
    }
 }

 let area = new childComponent(obj,obj1)
 console.log('area',area.tringleArea(20 ,20));

 /**
  * Geeting protoype of an  Object
  */
console.log(Object.getPrototypeOf("")); // {}

/**
 * Getting is Object is Extendbile or Not
 */
console.log(Object.isExtensible(obj1)); // true means extensible.seal({})

/**
 * Defing Multiple Method to an object;
 */

const newObject = {};

Object.defineProperties(newObject,{
    newProperty:{},
    newProperty2:{
        name:"the feild",
        sirName:"the Sirname Field"
    }
})

console.log(newObject.newProperty); // undefined
console.log(newObject.newProperty2); // uddefined

/**
 * Alway Aviod using with statment  creates problem
 */


/**
 * Finding the output of the following For loop ;
 */

for(var i = 0 ; i < 4 ; i++){
    setTimeout(()=> console.log(i))
}; // 4 ,4,4,4

for(let i = 0 ; i < 4 ; i++){
    setTimeout(()=>console.log(i))
}  // 0,1,2,3,4


/**
 * Assign Vlaue with let const
 */

let array = [2, 3, 4, 5];
array = array.push(2);

/**
 * Writing multiline String Sentance;
 */

console.log(`this is thre string send
of the new log`);


/**
 * What 
 */