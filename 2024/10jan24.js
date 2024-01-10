var findMaxAverage = function(nums, k) {
    let maxSum = 0
    let total = 0
    for(let i = 0 ; i < k ; i++){
        maxSum += nums[i]
    }
    let temTotal = maxSum
    for(let i = k ; i < nums.length  ; i++){
        temTotal = nums[i] - nums[i-k]
        total = Math.max(temTotal,maxSum)
    }
    return total/k

};

console.log(findMaxAverage([1,12,-5,-6,50,3],4));

//         [-6 ,-5 , 1,3,12,50]