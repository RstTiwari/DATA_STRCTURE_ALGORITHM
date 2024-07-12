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
            cur - next;
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

console.log(strStr("mississippi", "issip"));

function firstOccurrenceOfString(string, word) {
    let cur = 0;
    let next = 0;

    while (cur < string.length) {
        if (string[cur] !== word[next]) {
            cur = cur - next + 1;
            next = 0;
        } else {
            next++;
            if (next === word.length) {
                return cur - next + 1;
            }
            cur++;
        }
    }
    return -1;
}

console.log(firstOccurrenceOfString("hello", "ll"));
console.log(firstOccurrenceOfString("mississippi", "issip"));

function lastOccuranceOfString(string, word) {
    let last = string.length - 1;
    let pre = word.length - 1;
    while (last >= 0) {
        if (string[last] !== word[pre]) {
            last += word.length - pre - 1;
            pre = word.length - 1;
        } else {
            if (pre === 0) {
                return last;
            }
            pre--;
        }
        last--;
    }
    return -1;
}

console.log(lastOccuranceOfString("hllello", "ll"));
