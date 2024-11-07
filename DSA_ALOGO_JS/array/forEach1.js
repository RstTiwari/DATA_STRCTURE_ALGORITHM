let array = [2,4,69,78,67,23]

Array.prototype.customForEach = function(callBack){
    if(typeof callBack != "function"){
        console.log("no function as input")
        return
    }
    
for(i = 0 ; i < this.length ;i ++){
   let result=[]
if(this.hasOwnProperty(i)){
result.push(callBack(this[i],i,this))
}
    
    console.log(result)
}
}

function callBack(ele){
    return ele*2
}

console.log(array.customForEach(callBack))
