function maxAvgSubArray(array, num) {
    let maxSum = 0;
    let minSum = 0;
    if (array.length < num) return 0;
    for (let i = 0; i < num; i++) {
        maxSum += array[i];
    }

    minSum = maxSum;

    for (let i = num; i < array.length; i++) {
        minSum = minSum - array[i - num] + array[i] / num;

        maxSum = Math.max(maxSum / num, minSum / num);
    }
    return maxSum;
}

console.log(maxAvgSubArray([1, 12, -5, -6, 50, 3], 4));
