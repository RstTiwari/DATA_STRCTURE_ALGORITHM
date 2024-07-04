
const a = {
    name:"ROhit",
    std:function r(){
        console.log(this)
    }
}

function  change (obj){  
    obj.name = "rohit1"
    return obj
}

let b = change(a)
console.log(a,b)