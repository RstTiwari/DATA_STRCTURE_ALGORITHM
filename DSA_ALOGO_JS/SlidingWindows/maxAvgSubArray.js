function maxAvgSubArray(array, num) {
    let maxSum = 0;
    let minSum = 0;

    if (array.length < num) return 0;
    for (let i = 0; i < num; i++) {
        maxSum += array[i];
    }

    minSum = maxSum;
    for (let i = num; i < array.length; i++) {
        minSum = minSum - array[i - num] + array[i] ;
        maxSum = Math.max(maxSum,minSum);
    }
    return maxSum/num
}

console.log(maxAvgSubArray([50,50], 0));

/**
//  *   first it
//  */

// // first it   maxSum = 
// console.log(Math.max(2,51))  == 51
// // second itraattion   minSUm = 51 -12 + 3  = 39 +3 = 42
// console.log(Math.max(51,42))
