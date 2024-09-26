Array.prototype.customPop = function(){
   let length = this.length
   let lastElem = this[length-1]
   delete this[length -1]
   this.length --
   return lastElem
}

let array =[3,6,982,36]
console.log(array.customPop())
console.log(array)
