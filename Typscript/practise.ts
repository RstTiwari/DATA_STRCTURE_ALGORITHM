const names:String[] = []
names.push("rohit")
console.log(names); ///

// ReadOnly Array which can not be modified
const readOnlyArray: readonly string[] = ["rohit"]
//readOnlyArray.push() /// pussh  push does not exit on read only type


let tuples :[number,string,object]
tuples = [123,"rohit",{jdd:"jdjf"}]
console.log(tuples);

// Defining an Object using typescript
const car:{type:string,millage:number}={
    type:"Diselt", 
    millage:200 
}// Goo with predefing the keyword like this



// what if we want to add Key latterOn or maybe the add many key

let caraddingLatter:{type:string,year:number,model? :string} = {
    type:"CNG",
    year:2012
}

console.log(caraddingLatter);   

//Using index signature without using predeinfed Propeties

const nameAgemap:{[index:string]:unknown} = {}
nameAgemap.std = 30
nameAgemap.profit = 40
nameAgemap.school ="Rohit"
console.log(nameAgemap);


/**
 * @enums //
 */

enum cardinalDirections {
    north,south,west,east
}

console.log(cardinalDirections.north);

enum  numericEnums{
    north=  1,
    south,
    west 
}

console.log(numericEnums.west);




/**
 * Type Aliases
 */

type CarYear = Number;
type CarName = String

type Car ={
    name:CarYear,
    year:CarYear
}


const carYear:CarYear = 2020;
const carName:CarName = "Audi"


console.log(carYear,carName)




/**
 * Interface  ===> Only being used for like Objects
 */

interface Reactancle {
    height: Number|String,
    width: Number,
    name: String;
}

const rectangle: Reactancle = {
    height: "200",
    width: 300,
    name: "Audi"
}

console.log(rectangle,'--');

/***
 * TypeScript Functions
 */

function typscript(a: number, b: String, c?: number): number {
    return a
}


console.log(typscript(2 ,"5"))





