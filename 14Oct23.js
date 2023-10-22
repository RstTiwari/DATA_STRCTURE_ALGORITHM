// Q Just Writer the programme to reverse the Array

let reversedArray = []
function ReverseArray(arr){
    if(arr.length < 1){
        return 
    }
    let lastIndex = arr.length -1;
    let lastValue  = arr[lastIndex] 
    reversedArray.push(value)
   ReverseArray(arr.slice(0,lastIndex))
   return reversedArray
}

//console.log(ReverseArray([2,3,5,7,89,1,2,10]))

// Write a fucntion to Reverse A stirng from 
let reversedString = []
function ReverseString (str){
    if(str.length < 1){
        return
    }
    let lastIndex = str.length -1 
    let lastChar = str[lastIndex]
    reversedString.push(lastChar)
    ReverseString(str.slice(0,lastIndex))
    return reversedString.join("")

}

console.log(ReverseString("namedsjkfhkiurerue"));

