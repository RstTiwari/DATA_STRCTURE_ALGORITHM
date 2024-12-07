
var betterApproch = function (nums) {
  let n = nums.length;
  let map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (value > 1) {
      return key;
    }
  }
};

console.log(betterApproch([1, 3, 4, 2, 2]));
