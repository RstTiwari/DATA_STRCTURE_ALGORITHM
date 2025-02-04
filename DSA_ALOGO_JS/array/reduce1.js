let array = [ 3,6,71,23,2,1,10]
Array.prototype.customReduce = function (CB,IV){
    
    for(let i = 0 ; i < this.length; i ++){
       IV =  CB(IV,this[i])
    }
    
    return IV
}


function getMax(acc,curr){
    return acc+curr
}

console.log(array.customReduce(getMax,10))
