// Remove Duplicates from the array 

function removeDup2(nums) {
    let cur = 0
    let next = 1
    let count ={}
    while (next < nums.length) {
        if (nums[cur] != nums[next]) {
            cur++;
            nums[cur] = nums[next];
        }else{
            count[nums[cur]]   =  (count[nums[cur]] || 1 )+1
             if(count[nums[cur]] <= 2){
                cur ++
                nums[cur] = nums[next]
             }            
        }
        next++;
    }
    return nums.splice(0,cur+1).length

}

function removeDupWithTwoPointer (nums){
    let cur = 1
    let count = 1
    for(let i = 1 ; i < nums.length ; i ++){
        if(nums[i] === nums[cur -1]){
            count++
        }else{
            count = 1
        }

        if(count <=2){
            nums[cur] = nums[i]
            cur++
        }
    }
    return cur
}
//console.log(removeDupWithTwoPointer([1,1,1,2,2,3]))
//console.log(removeDup2([0, 0, 1, 1, 1, 1, 2, 3, 3]));
//console.log(removeDup2([1,1,1,2,2,3]))


// Removing Duplicates with counter 
function removeDupWithCounter(nums) {
    let map = new Map();
    let temNums = [];
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
         console.log(map,"==");
        for (let [key, value] of map) {
            if ((value = 1)) {
                temNums.push(key);
            } else if (value == 2) {
                temNums.push(key, key);
            }
        }

        return temNums;
    
}

console.log(removeDupWithCounter([1,1,1,2,2,3]))