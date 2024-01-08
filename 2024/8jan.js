var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    for (let j = 0; j < t.length; j++) {
        if (s[i] == t[j]) {
            i++;
            continue;
        }
    }
    if (i === s.length) {
        return true;
    }
    return false
};
console.log(isSubsequence("afbc", "ahbgedc"));
