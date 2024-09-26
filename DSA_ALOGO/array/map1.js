Array.prototype.customMap = function(callBack){
    let newArray = []
    
for(let i = 0; i < this.length ; i++){
    newArray.push(callBack(this[i]))
}
return newArray
}

function callBack(ele){
    if(!ele){
        return undefined
    }
  return   ele*2
}

let array = [5,69,1023,10]

let newArray = array.map((item)=>{return item})
console.log(newArray)

let newArray2 = array.customMap(callBack)
console.log(newArray2)
