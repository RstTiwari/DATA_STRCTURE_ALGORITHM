


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

join.customJoin("-")
