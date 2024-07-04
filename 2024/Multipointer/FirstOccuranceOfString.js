function firstOccurrence(string, word) {
    let cur = 0;
    let next = 0;
    while (cur < string.length) {
        // Checking the potions are equal
        if (string[cur] !== word[next]) {
            next = 0;
        } else {
            if (next + 1 === word.length) {
                return cur - word.length + 1;
            }
            next++;
        }
        cur++;
    }
    return -1;
}

var strStr = function (haystack, needle) {
    let cur = 0;
    let next = 0;
    while (cur < haystack.length) {
        if (haystack[cur] !== needle[next]) {
            next = 0;
            cur -next
        } else {
            next++;

            if (next === needle.length) {
                return cur - needle.length + 1;
            }
        }
        cur++;
    }
    return -1;
};

console.log(strStr("mississippi", "issip"))

