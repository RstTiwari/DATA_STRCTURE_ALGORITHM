// It's better to solve this kind of questions with the help of The HasMap Method

function twoSum(nums, target) {
        let hasMap = {};
        for (let i = 0; i < nums.length; i++) {
            let completment = target - nums[i];
            if (hasMap.hasOwnProperty(completment)) {
                return [hasMap[completment], i];
            }
            hasMap[nums[i]] = i;
        }
        return null;
}

console.log(twoSum([2,7,11,15],9))


function twoSum1(nums,target){
    let hasMap = {}
    for(let element in nums){
        let complement = target - nums[element]
        if(hasMap.hasOwnProperty(complement)){
            return [hasMap[complement],element]
        }

        hasMap[nums[element]] = element
    }
}

console.log(twoSum1([2,7,11,15],9))


// Now Solving the same question using the methods like map


function twoSum2(nums,target){
    let hasMap = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        let complement = target -nums[i]
        if(hasMap.has(complement)){
            //return [hasMap.get(complement),i]
        }
        hasMap.set(nums[i],i)
    }
    console.log(hasMap);

}

console.log(twoSum2([2,7,11,15],9));