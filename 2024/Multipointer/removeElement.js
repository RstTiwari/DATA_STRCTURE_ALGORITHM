
var removeElement = function(nums, val) {
    let cur = 0
    let next =  0
    while (next < nums.length){
        if(nums[next] !== val){
            nums[cur ] = nums[next]
            cur ++
        }
        next ++
    }
    return nums.slice(0,cur).length
};

const newArray =removeElement([3,2,2,3],3)
console.log(newArray,"---")