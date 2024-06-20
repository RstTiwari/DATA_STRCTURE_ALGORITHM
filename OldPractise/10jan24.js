var findMaxAverage = function(nums, k) {
    let total = 0
    for(let i = 0 ; i < k ; i++){
        total += nums[i]
    };

    let temTotal = total
    for(let i = k ; i < nums.length  ; i++){
        temTotal += nums[i] - nums[i-k]
        total = Math.max(temTotal,total)
    }
    return total/k

};

console.log(findMaxAverage([1,12,-5,-6,50,3],4));
const findMinSubAverage = function (nums ,k ){
    let total = 0
    for(let i = 0 ; i < k ; i++){
        total += nums[i]
    }
    let temTotal = total ;

    for (let i = k; i < nums.length; i++) {
        temTotal += nums[i] + nums[i - k];
        total = Math.min(temTotal, total);
    }
    return total
}
console.log(findMinSubAverage([-6 ,-5 , 1,3,12,50],4))

const findLongestSubstring = ()=>{
    
}