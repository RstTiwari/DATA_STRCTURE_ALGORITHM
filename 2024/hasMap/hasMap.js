function twoSum2(nums,target){
    let hasMap = new Map()
    for(let i = 0 ; i < nums.length ; i++){
        let complement = target -nums[i]
        if(hasMap.has(complement)){
            //return [hasMap.get(complement),i]
        }
        hasMap.set(nums[i],i)
    }

}

console.log(twoSum2([2,7,11,15],9));

function longestSubString(string) {
    let hasMap = new Map();
    let current = "";
    let longest = "";
    for (let i = 0; i < string.length; i++) {
        console.log(longest,current,hasMap,i);
        if (!hasMap.has(string[i])) {
            current += string[i];
            hasMap[string[i]] = i;
        } else {
            if (current.length > longest.length) {
                longest = current;
            }
            current = "";
            hasMap.clear();
        }
    }

    return longest.length;
}


console.log(longestSubString("abcabcbb"))
/**
 * 1                          i        hasMap = {a =>0} current = a
 * 2                           i       hasMap = {a=>0,b=>1} current = ab
 * 3                            i       hasMap = {a => 0 , b=> 1,c =>2 } current = abc
 * 4                             i      
 */


