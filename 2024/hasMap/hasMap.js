function twoSum2(nums, target) {
    let hasMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hasMap.has(complement)) {
            //return [hasMap.get(complement),i]
        }
        hasMap.set(nums[i], i);
    }
}

console.log(twoSum2([2, 7, 11, 15], 9));

function longestSubString(string) {
    let hasMap = new Map();
    let current = "";
    let longest = "";
    for (let i = 0; i < string.length; i++) {
        if (!hasMap.has(string[i])) {
            current += string[i];
            hasMap.set(string[i], i);
        } else {
            if (current.length > longest.length) {
                longest = current;
            }
            current = "";
            hasMap.clear();
        }

        console.log(current, longest);
    }
    if (current.length > longest.length) {
        longest = current;
    }
    console.log(longest, current);
    return longest.length;
}

// console.log(longestSubString("abcabcbb"));
console.log(longestSubString("aab"));
/**
 * 1
 */
