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
            // if chr is not in the map adding it
            current += string[i];
            hasMap.set(string[i], i);
        } else {
            if (current.length > longest.length) {
                longest = current;
            }
            i = hasMap.get(string[i]);
            current = "";
            hasMap.clear();
        }
    }
    if (current.length > longest.length) {
        longest = current;
    }
    return longest.length;
}

// console.log(longestSubString("dvdf"));
console.log(
    longestSubString(
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP"
    )
);

// console.log(longestSubString("bbbbb"));

/**
 *
 */

function longestSubStringWithSlidingWindow(string) {
    let hasMap = new Map();
    let left = 0,
        right = 0,
        current = 0;
    while (right < string.length) {
        if (!hasMap.has(string[right])) {
            hasMap.set(string[right], right);
            current += 1;
            right++;
        } else {
            current = 0;
            hasMap.clear();
            left++;
        }
    }
    console.log(current);

    return current;
}

console.log(longestSubStringWithSlidingWindow("dvdf"));
console.log(longestSubStringWithSlidingWindow("bbbb"), "--");
