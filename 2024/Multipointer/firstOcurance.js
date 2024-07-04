function firstOccurnace(hatstack, neddle) {
    let cur = 0;
    let next = 0;
    while (cur < hatstack.length) {
        if (hatstack[cur] !== neddle[next]) {
            cur = cur - next + 1;
            next = 0;
        } else {
            next++;
            if (next === neddle.length) {
                return cur - next + 1;
            }
            cur++;
        }
    }
    return -1;
}

console.log(firstOccurnace("hello", "ll"));
/**
 *  1   if  h  not equals  l    ==> next = 0  , cur =+ cur -next => 0 -0 = 0 ,
 *  2   if  e not equals  l  => next = 0 , cur = cur -next => 0 = 0
 * 2
 *
 */

function firstOccuranceFormBackWord(haystack, needle) {
    let cur = haystack.length - 1;
    let next = haystack.length - 1;
    while (cur > 0) {
        if (haystack[cur] !== needle[next]) {
            cur = cur + next - 1;
            next = haystack.length - 1;
        } else {
            next--;
            if (next === needle.length) {
                return cur + next - 1;
            }
        }
    }
    return -1;
}

console.log(firstOccuranceFormBackWord("hello", "ll"));
