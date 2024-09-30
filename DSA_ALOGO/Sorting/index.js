var thirdMax = function (nums) {
    let start = 0;
    while (start < nums.length) {
        if (nums[start] <= nums[start + 1]) {
            start++;
        } else {
            [nums[start], nums[start + 1]] = [nums[start + 1], nums[start]];
        }
    }
    return nums;
};

// console.log(thirdMax([3, 2, 1]));

function sortArray(num) {
    let max = num[0];
    let cur = 0;
    let next = 1;

    while (next < num.length) {
        if (num[next] < max) {
            num[cur] = num[next];
            num[next] = num[cur];
            cur++;
        }
        next++;
    }
    console.log(num);
}

console.log(sortArray([2, 1, 2, 5, 9, -1]));
