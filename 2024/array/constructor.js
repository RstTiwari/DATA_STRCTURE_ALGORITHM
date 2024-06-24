/**
 * @ new Array(element1 ,element2,element3........,elementN)
 * 
*/

// if only one arguments are passed it create arrya.lenht with empty slots  *****

const arrayConstructor = new Array(2, 3, 4);
console.log(arrayConstructor); // [2,3,4]
console.log(typeof arrayConstructor); // object
console.log(arrayConstructor instanceof Array); // true
console.log(arrayConstructor instanceof Object); //  true

const array = Array({}, {});
console.log(array); // [{},{}]


const newArray = new Array(3 )
console.log(newArray,"--");  // [3 empty items]
const undefinedArray = new Array(undefined)
console.log(undefinedArray);  // [undefined]
const nullArray = new Array(null)
console.log(nullArray);  // [null]

const rangeError = new Array(2**33)
console.log(rangeError);//  RangeError: Invalid array length   Excpetion cases
