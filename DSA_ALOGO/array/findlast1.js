let last =[23,9,34,26,23]
Array.prototype.customFindLast = function(callBack){
    for(i = this.length-1; i >= 0;i--){
        if(callBack(this[i],i, this)){
            return i
        }
    }
    return undefined 
}
function findLast(ele,value){
    if(ele === value){
        return true
    }
    return false
}

console.log(last.customFindLast((ele)=> findLast(ele,23)))
