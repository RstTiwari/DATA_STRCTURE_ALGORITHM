// Finding Maximum nad minimum of an array;

let array = [50, 20, 70, 60, 45, 30];


/* first method of finding max and min of Array,
here we are using Math.min function with apply method;  
*/;

function findMin(arr){
    return Math.min.apply(null ,arr)
}
function findmax(arr){
    return Math.max.apply(null,arr)
}

let min = findMin(array) // 20
let max  = findmax(array) //  70

/*
 method tow by desturcturing array and using the math.min

*/
console.log(Math.min(...array)); // 20
console.log(Math.max(...array));  // 70


/**
 * here we will not use math.min method insted by for loop
 */
let min3 = Infinity;
for(let ele of array){
    if(ele < min3){
        min3 = ele;
    }
};

let max3 = -Infinity;
for(ele of array){
    if(ele > max3){
        max3 = ele;
    };
}

console.log(min3)
console.log(max3);

/**
 * Mehtod 5 using while loop;
 */

let length = array.length;
let min4 = Infinity
let max4 = -Infinity;

while (length--) {
    if(array[length] < min4){
        min4 = array[length]
    }
}

while (length--) {
    if(array[length] > max4){
        max4 = array[length]
    }
}
console.log(min4);

