function nestedArraySum(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!isNaN(element)) {
            sum += element;
        } else if (Array.isArray(element)) {
            sum += nestedArraySum(element);
        }
    }
    return sum;
}


function nestArrayObjectSum(object) {
    let sum = 0;
    for (let key in object) {
        if (!isNaN(object[key])) {
            sum += object[key];
        } else if (typeof object[key] === "object" && object[key] !== null) {
            console.log(object[key]);
            sum += nestArrayObjectSum(object[key]);
        }
    }
    return sum;
}

const b = { c: 20, d: 20 };
console.log(typeof b);
console.log(nestArrayObjectSum({ a: 20, b: { c: 20, d: 20 }, e: 20 }));

function checkTowObjectAreEqualOrNot(obj1, obj2) {
    const keys1 = [];
    for (let key in obj1) {
        keys1.push(obj1[key]);
    }
    const keys2 = [];
    for (let key in obj2) {
        keys2.push(obj1[key]);
    }
    if (keys1.length !== keys2.length) {
        return false;
    }

    // both the value are array chgeck if equal or not
}

function checkValueNestedKeyAreEqual() {}

function power(base, exp) {
    // base case if exponnet is 1 return 1
    // mulitply base * base
    if (exp <= 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}
console.log(power(5, 5));

function productOfArray(array) {
    if (array.length <= 1) {
        return array[0];
    }

    return array[0] + productOfArray(array.slice(1));
}
console.log(productOfArray([2, 3, 4, 5, 67, 8, 89]));


{
    // accept a number and give sum of number from 0 till that number
}
function recursiveRange(num){
   if(num ===0 ){
    return 0
   }
   const sum = num + recursiveRange(num - 1)
   return sum
}
console.log(recursiveRange(10));




function fib(num , a =0 , b = 1 ){
      if(num <= 0){
        return a
      }
      const nthNumber = fib(num -1 , b ,a +b)
      return nthNumber
  }

console.log(fib(35))

function reversStringRecusrsion (str){
     if(str.length <= 1){
        return str[0]
     }

     const reversed = reversStringRecusrsion(str.substring(1))
     return reversed + str[0]
}

console.log(reversStringRecusrsion("rohit"))

/**
 * @params Wirte recursive fucntion to check if the given value is Palindrom or not
 *  @input Takes a String 
 * @output return binary value weather true or not
 */

function checkPalindrome (str){
    console.log(str);
    if(str.length <= 1){
        return str[0]
    }
    // helper function two check if first and last valuers are equal or not
    if(firstValue(str) !== lastValue(str)){
        return false
    }

    // now Helper fumnction to get middle of String with first and last vlaue
    checkPalindrome(getMidleString(str))
    return true
}
console.log(checkPalindrome("tenet"))

function firstValue (str){
    console.log(str[0]);
    return str[0]
}
function lastValue (str){
    console.log(str[str.length -1]);
    return str[str.length -1]
}

function getMidleString (str){
    console.log(str[1,-1])
    return str[1 ,-1]
}