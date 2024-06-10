var moveZeroes = function (nums) {
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0){
            [nums[i] , nums[left]] = [nums[left],nums[i]]

        }
    }
    return nums
};


// var moveZeroes2 = function(nums) {
//     let left = 0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] !== 0){
//             
//             left++;
//         }
//     }
//     return nums
// };
console.log(moveZeroes([0,0,1]));

//  0  1  0   3   12
//  i              j
