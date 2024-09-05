const array = [1,3,4,5,6,NaN,undefined,null]


console.log(array.indexOf(undefined)); // 6
console.log(array.indexOf(null));  // 7

console.log(array.indexOf(NaN))   // -1 Because Indexof uses Strict operator internally


