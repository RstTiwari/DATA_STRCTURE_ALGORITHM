Array.prototype.customFlat=function (depth){
    let result=[]
    for(let i = 0 ; i < this.length; i++){
        if(Array.isArray(this[i]) && depth > 0){
             result = result.concat(this[i].customFlat(depth-1))
             
        }else{
          result.push(this[i])
        }
    }
    return result
}

let toFlat = [2,3,[2,5,[1,2,[4,5]]]]
console.log(toFlat.customFlat())
