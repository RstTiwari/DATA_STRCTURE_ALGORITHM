// targrt = 7 nums = [2,3,1,2,4,3]
// maxSum = nums[0]+ nums[1]

function findTheTargetArray(nums,target){
    let obj = {}
    let subArray = []
    for (let num  of nums){
        obj[num]  ? obj[num] +=1 : obj[num] =1
    }

    for (let [key,value] in obj){
        let toCheck = target - key
        if(obj[toCheck] >= 1){
            subArray.push([Number(key),toCheck])
        }
    }
    return subArray
    console.timeEnd()
}
console.log(findTheTargetArray([2,3,1,2,4,3,6],7))


function findtheTargetArrayUsingMap(nums ,target){
    let obj = new Map()
    for(let num of nums){
        obj.has(num) ? obj.set(num, obj.get(num)+1) : obj.set(num,1)
    }

    for (let [key,value] of obj){
        let toCheck = target - key
        if(obj.get(toCheck)>=1){
            return [key,toCheck]
         }
    }
}
console.log(findtheTargetArrayUsingMap([2,3,1,2,4,3,6],7))

