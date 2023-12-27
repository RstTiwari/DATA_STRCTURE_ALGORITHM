/**
 *  Array.prototype.at(index)
 *  return  Array[index]
 *  return undefined
 */

let array1 = [12,3,4,5,67,78]
//console.log(array1.at(1))

/**
 * Array.prototype.concat(value1 ,value2 ,value2.....,valueN)
 * return new Array
 */

/**
 * Array.prototype.copyWithin(target,start ,end)
 * return new Array by changing target value
 * target > array.length nothing changes
 * target <  array.length index counted from back
 * start postion is missed it will shift the O index value at the target postion
 */

//console.log(array1.copyWithin(2,1))
//console.log(array1.copyWithin(1))
//console.log(array1.copyWithin(1))

/**
 * Array.prototype.entries
 * returns A new iterable iterator object.
 */
let itrator1 = array1.entries()
console.log(itrator1);