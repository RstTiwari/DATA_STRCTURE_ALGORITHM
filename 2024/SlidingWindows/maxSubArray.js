function maxSumSubarrya(array, num) {
    let maxSum = 0;
    let temSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += array[i];
    }
    temSum = maxSum;

    for (let i = num; i < array.length; i++) {
        temSum = temSum - array[i - num] + array[i];
        maxSum = Math.max(maxSum, temSum);
    }
    return maxSum;
}

console.log(maxSumSubarrya([1, 2, 3, 4, 6, 8, 9], 3));
/**
 *                                   1  2  3  4
 */
