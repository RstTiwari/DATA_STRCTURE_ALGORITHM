let join =["name","class" ,"book","std"
]

Array.prototype.customJoin = function(char){
    let str = ""
    if(!char){
        char = ","
}

for(let i = 0; i < this.length; i ++){
    let tem =this[i]
    str += this[i]
    
    if(i != this.length-1){
        str += char
    }
}
console.log(str)
return str 
}

let matrix =[1,4,undefined,()=>{} ]
console.log(matrix.join(()=>{}))

matrix.customJoin(10)
