function removeDuplicate(nums){
    let cur = 0
    let next = 0
    while (next < nums.length){
      if(nums[cur] !== nums[next]){
          cur ++
          nums[cur] = nums[next]

      }
      next ++
    }

    return nums.slice(0,cur +1)
}

console.log(removeDuplicate([2,3,3,4,5,6,6,9]))

function removeDuplicate2(nums) {
    let cur = 1;
    let count = 1;
    for (let i = 1; i < nums.length ; i++) {
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count <= 2) {
            nums[cur] = nums[i];
            cur++;
        }
    }
    return nums.slice(0,cur)
}
function  removeDuplicate3(nums){
    let cur = 0
    let next = 0
    let count = 0
    while (next < nums.length){
        if(nums[next] === nums[cur]){
            count ++
        }else{
            count = 1
        }

        if(count <= 2){
            cur ++
            nums[cur] === nums[next]
            
        }
        next ++
    }
    return nums.slice(0,cur +1)
}

console.log(removeDuplicate2([2,3,3,3,4,4,5,6,6,9]))