var search = function(nums, target) {
    //Let Start Applying the  Binary Search on this 
    let start = 0
    let end = nums.length - 1
    console.log(rotedPoint,"==")
    let median  = Math.floor((start+end)/2)

    while(start <= end){
        if(nums[median] === target){
            return true
         } 
         if(nums[median] > nums[median+1]){ // array has been roted

         }
    
         if(target > nums[median] && target > nums[end]){ // target is in the left side of array
             end = median -1     
         }else {
            start = median + 1
         }
         median = Math.floor((start+end)/2);
    }
    return false
};

console.log(search([1,1],1))
console.log(search([2,5,6,0,0,1,2],0))
console.log(search([2,5,6,0,0,1,2],3))