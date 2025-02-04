    var search = function (nums, target) {
        //Let Start Applying the  Binary Search on this
        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            let median = Math.floor((start + end) / 2);

            if (nums[median] === target) {
                return true;
            }
            // checking if having multipels value

            if (nums[start] === nums[median] && nums[end] === nums[median]) {
                start++;
                end--;
            // then we have to check which half is sorted
            } else if (nums[start] <= nums[median]) {  // 
                if (nums[start] <= target && nums[median] > target) {
                    end = median - 1;
                } else {
                    start = median + 1;
                }
            } else {
                // the end half is sorted
                if (target > nums[median] && target <= nums[end]) {
                    start = median + 1; // search in the end half
                } else {
                    end = median - 1; // searching the end half
                }
            }
        }
        return false;
    };

console.log(search([1, 1], 1));
console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
console.log(search([1, 0, 1, 1, 1], 0));
