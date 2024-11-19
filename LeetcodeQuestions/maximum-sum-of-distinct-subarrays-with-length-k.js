var maximumSubarraySum = function (nums, k) {
  let maxSum = -Infinity;
  let windowElement = new Set();
  let left = 0;
  let currentSum = 0;
  let n = nums.length;

  for (let right = 0; right < n; right++) {
    // updating the current sum
    currentSum += nums[right];
    windowElement.add(nums[right]);
    
    console.log(windowElement,"----")
    if (windowElement.size !== (right - left + 1)) {
      // Remove element at the left pointer and adjust the sum
      windowElement.delete(nums[left]);
      currentSum -= nums[left];
      left++; // Move the left pointer to the right
    }

    if (right - left + 1 === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3))
