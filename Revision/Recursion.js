//Flatting Deep nested Array

function flatting(array) {
    //base Condition
    let flatted = [];
    for (let i = 0; i <= array.length - 1; i++) {
        const element = array[i];
        if (Array.isArray(element)) {
            flatted = flatted.concat(flatting(element));
        } else {
            flatted.push(element);
        }
    }
    return flatted; // returing the element
}

console.log(flatting([12, 3, 4, [23, [23, 243, [23445]]], [2334]]));

console.log("rohit".substring(1, -1));

function checkPalindrome(str) {
    // making a base condtion for this Logic
    if (str.length <= 1) {
        return true;
    }

    // now check if the first and the Last charcters are matching or not
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // now gettin with new String called the Fucntion again
    checkPalindrome(str.substring(1, str.length - 1));
    return true;
}
console.log(checkPalindrome("tenet"));

function reverseString(str) {
    // Base Condtion
    if (str.length <= 1) {
        return str[0];
    }

    const reversed = reverseString(str.slice(1));
    return reversed + str[0];
}
console.log(reverseString("rohit"));

function checkTwoObjectAreEqula(obj1, obj2) {}
