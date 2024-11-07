

let obj ={
    "a":{
        "amt":30
    },
    "b":{
        "amt":50
    },
    "c":{
        "amt":60
    }
   
}



let obj2 ={
    length:3,
    1:10,
     2:30,
    3:40
}


let 
sum = Array.prototype.reduce.call(obj2,(a,b)=> a+b)

console.log(sum,"sum")
let sum2 = Object.values(obj).reduce((acc,cur) => acc+cur.amt,0)
console.log(sum2)
