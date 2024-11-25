
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



