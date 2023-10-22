// Learning Important question that are releted to Arrays

// Q In Given array Find Count of Each number Present
function CountChar(arr,num) {
    let value
    let countObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (countObj[arr[i]]) {
            countObj[arr[i]] += 1
        } else {
            countObj[arr[i]] = 1
        }
    }

    for(let key in countObj){
        if(Number(key) === num){
            value = countObj[key]
        }
    }
    return `the Count for ${num} is ${value}`
}

console.log(CountChar([2, 3, 4, 2, 5, 6, 7, 8, 9],3))
// First way is 

function CountRecursive(arr){
    if(arr.length === 0){
        return
    };

    let countObj = {};
    let checkNum = arr[0]
    if(countObj[checkNum]){

    }
}
// cant be solve in  this way;
CountRecursive([2, 3, 4, 2, 5, 6, 7, 8, 9])

//How would you remove duplicates from an array in JavaScript? 
function Duplicates(array) {
    console.time("time")
    // I have to remove the dupliucates from the array;
    let newArray = []
    let checkObj = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (checkObj[element]) {
            continue
        } else {
            checkObj[element] = 1
            newArray.push(element)
        }

    }
    console.timeEnd("time")
    return newArray

}

console.log(Duplicates([2, 3, 4, 2, 5, 6, 7, 8,3,6,2,5,9, 9.5 ,9.6]))

// Other way of Implemeting the Duplicate Value
function  removeDuplicate(array){
console.time("time")
const uniqueArray =  Array.from(new Set(array))
console.timeEnd("time")
return uniqueArray
}

console.log(removeDuplicate([2, 3, 4, 2, 5, 6, 7, 8,3,6,2,5,9, 9.5 ,9.6]))

// FInding Max and Min Value in Javscript 

function maxAndMin(array) {
    console.time("time")
    let max = -Infinity
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > max) {
            max = element
        }
    }
    console.timeEnd("time")
    return max;

}

console.log(maxAndMin([2,3,4,5,60,605,11,33,332,6363,727]))

// finding the max and Min value through other way;
function findingMaxMin(array){
    console.time("time")
    let max = Math.max(...array);
    console.timeEnd("time")
    return max
}
console.log(findingMaxMin([2,3,4,5,60,605,11,33,332,6363,727]))


//From given array find the consecutive pairs whose values  are Equals to the given  Number;
function findThePairs (array,num){
     const resultArray = [];
    for (let index = 0; index < array.length; index++) {
        const leftElement = array[index];
        const rightElement = array[index+1]
        let sum  = leftElement + rightElement 
        if(sum === num){
            console.log(sum,num)
           resultArray.push(leftElement,rightElement)
        }
    }
    return resultArray
}

console.log(findThePairs([2,3,4,5,60,605,11,5,3,2,33,332,6363,727],5))

