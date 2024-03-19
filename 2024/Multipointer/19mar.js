function longestSubString(str) {
    let left = 0;
    let right = 1;
    let visited = {};
    let longest = str[left];
    console.log(longest.length, str.length);
    while (right < str.length) {
        if (longest.length > str.length) {
            return longest;
        } else if (str[left] === str[right] || visited[str] >= 1) {
            left++;
            longest = longest + str[left];
            // o
        } else {
            longest = longest + str[right];
            visited[str] = (visited[str] || 0) + 1;
            right++;
        }
    }
    return longest;
}

console.log(longestSubString("rohittie"));

// visited

// char[left] == char[right] reduce window from left
// chat[left0 !== char[right]  incerese window size to write
