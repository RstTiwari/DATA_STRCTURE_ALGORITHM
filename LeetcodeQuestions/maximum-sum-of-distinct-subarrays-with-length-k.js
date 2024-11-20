/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// maximu subArray using the Set method
var maximumSubarraySum1 = function (nums, k) {
  let maxSum = 0;
  let windowElement = new Set();
  let begin = 0;
  let currentSum = 0;
  let n = nums.length;

  for (let end = 0; end < n; end++) {
    if (!windowElement.has(nums[end])) {
      currentSum += nums[end];
      windowElement.add(nums[end]);
      if (end - begin + 1 === k) {
        maxSum = Math.max(maxSum, currentSum);
        currentSum -= nums[begin];
        windowElement.delete(nums[begin]);
        begin++;
      }
    } else {
      while (nums[begin] !== nums[end]) {
        currentSum -= nums[begin];
        windowElement.delete(nums[begin]);
        begin++;
      }
      begin++;
    }
  }

  return maxSum;
};

//console.log(maximumSubarraySum1([1, 5, 4, 2, 9, 9, 9], 3));

let maximumSubarraySum2 = function (nums, k) {
  let maxSum = 0;
  let n = nums.length;
  let windowElement = new Map();
  let currentSum = 0;
  let begin = 0;
  for (let end = 0; end < n; end++) {
    currentSum += nums[end];
    windowElement.set(nums[end], windowElement.get(nums[end]) + 1 || 1);
    
    
  }
  return windowElement;
};

console.log(maximumSubarraySum2([1, 5, 4, 2, 9, 9, 9], 3));
