

Array.prototype.customPush = function(value){
    let length = this.length
    this[length] =value
    this.length = length +1
    return this.length
}

let array =[1,8,5,7]

console.log(array.customPush(3))
console.log(array.customPush(8))
console.log(array.customPush(()=>{}))

console.log([2,3].push(undefined,"---"))
