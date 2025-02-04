
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




function removeElement(array , num){
    let cur = 0
    let next = 0
    while (next < array.length){
        if(array[next] !== num){
            array[cur] = array[next]
            cur ++
        }
        
        next ++
    }
    
    return array.slice(0,cur)
}

console.log(removeElement([3,4,5,6,3],3))