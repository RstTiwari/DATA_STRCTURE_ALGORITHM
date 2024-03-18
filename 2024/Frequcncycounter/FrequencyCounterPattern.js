/**IF We have multiple Input To compare them we User Frequecy Paterrn */

//BigON should be must be O(N)

/**Checking if entred Two String are Valid Anagram or Not Same or Not */
function validAnagram(str1, str2) {
    const obj1 = {};
    const obj2 = {};
    for (let char in str1) {
        obj1[char] ? obj1[char] + 1 : (obj1[char] = 0);
    }

    for (let char in str2) {
        obj2[char] ? obj2[char] + 1 : (obj2[char] = 0);
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// console.log(same("rohit","name"))

function frequencyCounter(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    const obj1 = {};
    const obj2 = {};

    for (char of str1) {
        obj1[char] ? (obj1[char] += 1) : (obj1[char] = 1);
    }
    for (char of str2) {
        obj2[char] ? (obj2[char] += 1) : (obj2[char] = 1);
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(frequencyCounter([1, 2, 4], [2, 1, 3]));

function findTheMissingElement(array1, array2) {
    const obj1 = {};
    const obj2 = {};

    for (let char of array1) {
        obj1[char] ? (obj1[char] += 1) : (obj1[char] = 1);
    }
    for (let char of array2) {
        obj2[char] ? (obj2[char] += 1) : (obj2[char] = 1);
    }
    const missing = [];
    for (let key in obj1) {
        if (obj1[key] === obj2[key] && obj2[key] === obj1[key]) {
            continue;
        }
        missing.push(key);
    }
    return missing;
}
console.log(
    findTheMissingElement([12, 23, 45, 24, 56, 24], [12, 23, 45, 45, 24])
);

function sumOfTwo(array, target) {
    const obj1 = {};
    for (let item in array) {
        obj1[item] = (obj1[item] || 0) + 1;
    }
    const pairOfArray = [];

    for (let item of array) {
        const toAciveTar = target - item;
        if (obj1[toAciveTar] && obj1[toAciveTar] >= 0) {
            pairOfArray.push([item, toAciveTar]);
        }
    }

    return pairOfArray;
}

console.log(sumOfTwo([12, 23, 4, 5, 24, 23, 23, 2], 14));

/**
 * Questions to Practise in Evening Sections
 * 1) Longest Substring with K Distinct Characters
 * 2) Word Pattern
 * 3) Minimum Window Substring
 */

/**lOGNEST Substring */

function longestSubstring(str) {
    // keep the tracl current string
    // keep the track of longest string
    // have key object named as visited key
    let visited = {};
    let current = "";
    let longest = "";

    for (let i = 0; i < str.length; i++) {
        console.log(visited[str[i]]);
        if (!(str[i] in visited)) {
            current = +str[i];
            visited[str[i]] = i;
        } else {
            if (current.length >= longest.length) {
                longest = current;
            }
            current = "";
            i = visited[str[i]] + 1;
            visited = {};
        }
    }

    if (current.length >= longest.length) {
        longest = current;
    }
    console.log(longest, visited, "--");
    return longest;
}

console.log(longestSubstring("theende"));

function areThereDuplicates(...array) {
    let obj2 = {};
    for (let item of array) {
        obj2[item] = (obj2[item] || 0) + 1;
    }
    for (let key of array) {
        if (obj2[key] >= 2) {
            return true;
        }
    }
    return false;
}
console.log(areThereDuplicates(1, 2, 3, 4, 5));
