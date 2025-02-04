/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let start = 0;
    let end = nums.length - 1
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === nums[start] && nums[mid] === nums[end]){
            start ++
            end --
        }else if (nums[mid] <= nums[end]){  // right side of array is sorted
            end = mid
        }else {   // left side of arrya is sorted
            start = mid +1
        }
             
    }
    return nums[start]
}


// console.log(findMin([2,2,2,0,1]))
// console.log(findMin([1,2,4,5,6]))
// console.log(findMin([1,1,1,1,1]))
// console.log(findMin([3,1,1]))
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin1 = function (nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        // Handle duplicates: If middle element is equal to start and end
        if (nums[mid] === nums[start] && nums[mid] === nums[end]) {
            start++;
            end--;
        } 
        // Check if the right half is sorted
        else if (nums[mid] <= nums[end]) {
            end = mid;   // left half is  sorted search in the left half
        } 
        // Left half must be sorted, so search the right half
        else {
            start = mid + 1;
        }
    }
    return nums[start];
}

console.log(findMin1([2, 2, 2, 0, 1]));  // Output: 0
console.log(findMin([3,1,1]))

function findMin2(nums){
    let start = 0;
    let end = nums.length - 1;
    let min = nums[start]
    while(start < end){
        if(nums[start] > nums[start +1]){
            min = nums[start+1]
            break
        }
        start ++
    }
    return min
}
console.log(findMin2([1,3,5]))
