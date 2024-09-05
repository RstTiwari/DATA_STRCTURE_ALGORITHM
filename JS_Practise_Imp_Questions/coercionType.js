
// implicit type conversion

// number with  + sign and other values

//numbers are converted to String
console.log(1+"1")// 11
console.log(1+ true) // 2
console.log(1 + undefined ) // NaN
console.log(1 + null) // 1 +0 = 1

console.log(1 + {}) //1 object object
console.log(1+ []) //  "1"

console.log(1 +[11,3])// "111,3"


//Numbers with other sign than +
//  other vales are convetrd to num
console.log(1 - "1") // 0
console.log(1 -true) // 0
console.log(1- undefined ) // NaN
console.log(1-null) // 0 
console.log(1- {})// NaN
console.log(1-[]) // 1

console.log(1*"2") //2
console.log(8 /"4") // 2
console.log(3%"3") // 




console.log(1/null) // Infinity becasue null turns to be 0



// Booolens values with all signs and opreator

console.log(true +1) // 2
console.log(false - 2)// -2
console.log(true + undefined) // NaN
console.log(true + []) // " 1"
console.log(false - []) // "0"
console.log(false - {}) //NaN
console.log(true + {})// 1 Object
console.log(true + []) // "1"


//Coeerison in equlity check 
console.log( [] ==[]) // false

