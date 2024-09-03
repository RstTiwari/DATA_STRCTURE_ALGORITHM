
let user: User = {
    name: "Rohit",
    std: 9
}
interface User {
    name: String,
    std: Number
}
console.log(user)

let rohit: User = {
    name: "Rohit Kumare Tiwari",
    std: 10
}
console.log(rohit)

class UserAndClass {
    name: String
    std: Number

    constructor(name: String, std: Number) {
        this.name = name,
            this.std = std
    }


    get() {
        return this.name
    }
}

let user1 = new UserAndClass("Rohit", 10)
console.log(user1.name)


function deleteUser(user: User): User {
    return {
        name: "Roht",
        std: 10
    }
}

function getUser(): User {
    return {
        name: "Rohit",
        std: 10
    }
}


function throwError(): never {
    throw new Error("rorr")
}





// Advance DataType in ts
function unknowtype (value:Boolean):unknown {
   if(value ===true){
    return true
   }else{
    return 10
   }
}

console.log(unknowtype(false))


let user10:unknown = {}
console.log(user10)

function forAnyType ():any {
    return "this String Values"
}

console.log(forAnyType())

//Composing Type is Powerful way of  creating a Custom Types in js

//  Union Type;
type Success = {success:true,data:object}
type Faliure = {success:false,data:any}

type Result = Success | Faliure



