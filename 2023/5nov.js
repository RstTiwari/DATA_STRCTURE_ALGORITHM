// Frequency Counter Mechanism

function sameItretive(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let tempArray = []
        for (let j = 0; j < arr2.length; j++) {
             let checkSqaure = arr1[i]**2
             if(checkSqaure === arr2[j]){
               tempArray.push(arr2[j])
             }
        }
        if (tempArray.length > 1 || tempArray.length <= 0) {
            return false;
        }
    }
    return true
}


// sudo code
// Check legth of both array if not same return false
// take first vlaue of array1 loop over to the second array and check if square of it presnet or not

console.log(sameItretive([1,2,6],[4,1,36]));

function sameLastIndexOff(array1,array2){
    for (let index = 0; index < array1.length; index++) {
        let currentIndex = array2.indexOf(array1[i]**2) 
        if(currentIndex === -1){
            return false
        } 
        array2.splice(currentIndex,1)      
    }

    return true
}
console.log(sameItretive([1,2,6],[4,36,36]));

function sameFrequcneyCounter(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }

    let frquency1 = {};
    let frequency2 = {};
    for (let value of array1) {
        frquency1[value] = (frquency1[value] || 0) + 1;
    }

    for (let value of array2) {
        frequency2[value] = (frequency2[value] || 0) + 1;
    }

    for (let key in frquency1) {
        if (!(key ** 2 in frequency2)) {
            return false;
        }
        if ((frequency2[key**2] !== frquency1[key])) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequcneyCounter([1,2,6],[4,36,1]));

function anagramFrequncyCounter(string1,string2){
    if (string1.length !== string2.length) {
        return false;
    }

    let frequency1 = {};
    let frequency2 = {};
    for (let char of string1) {
        frequency1[char] = (frequency1[char] || 0) + 1;
    }

    for (let char of string2) {
        frequency2[char] = (frequency2[char] || 0) + 1;
    }

    for (let key in frequency1) {
        if (!(key in frequency2)) {
            return false;
        }

        if (frequency2[key] !== frequency1[key]) {
            return false;
        }
    }
    return true;
}

console.log(anagramFrequncyCounter("rohit","thiio"));

function areThereDuplicateFrequency(...nums){
    let frequency1 = {}
    for (let num of nums) {
        if (frequency1[num]) {
            return true;
        } else {
            frequency1[num] = (frequency1[num] || 0) + 1;
        }
    }
    console.log(frequency1);
    return false

}

console.log(areThereDuplicateFrequency("a","b","c","a"));

function areThereDuplicateMultipointer(...args) {
    args.sort((a, b) => a - b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) {
            return false;
        }
        start++;
        next++;
    }
    return false;
}

console.log(areThereDuplicateMultipointer(1,23,3,4,1,2));