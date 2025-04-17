function findingLonestSubString(str) {
    let longest = "";
    let current = "";
    let visited = {};
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in visited)) {
            console.log(!str[i]);
            visited[str[i]] = i;
            current = current + str[i];
        } else {
            if (current.length >= longest.length) {
                longest = current;
            }
            i = visited[str[i]];
            console.log(visited[str[i]]);
            current = "";
            visited = {};
        }
    }

    if (current.length >= longest.length) {
        longest = current;
    }

    return longest;
}

console.log(findingLonestSubString("tet"));

function checkStringChar() {}

console.log(checkStringChar("rohit"));

const obj = {
    name: "rohit",
    class: "rohit",
};

for (let key in obj) {
    console.log(key);
}

const str = "rohit";
for (let key of str) {
    console.log(key);
}

function toSum(array, tar) {
    const obj = {};
    for (const item of array) {
        obj[item] = (obj[item] || 0) + 1;
    }

    for (let key in obj) {
        const check = tar - key;
        if (obj[check] && obj[check] >= 1) {
            return [key, check];
        }
    }
}
console.log(toSum([3, 2, 8, 41, 3, 3], 5));

/*
* Takes two array and i have to find the missing value from the both the array
*/

function findTheMissingElement(array1, array2) {
    const obj1 = {};
    const obj2 = {};

    for (let item of array1) {
        obj1[item] = (obj1[item] || 0) + 1;
    }

    for (let item of array2) {
        obj2[item] = (obj2[item] || 0) + 1;
    }

    const missing = [];
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            missing.push(key);
        } else if (!obj2[key]) {
            missing.push(key);
        }
    }
    return missing
}

console.log(findTheMissingElement([12, 12, 2, 2, 2], [2, 3, 54, 5, 4]));
