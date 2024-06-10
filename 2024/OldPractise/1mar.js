function recorsionPailndromeCheck(str) {
    //Base Condtion Check if only one chracters or less than one charaters in the string
    if (str.length <= 1) {
        return true;
    }

    // checking if the first char of sting is equal to the last char of str
    console.log(firstCharacter(str) ,lastCharacter(str));
    if (firstCharacter(str) !== lastCharacter(str)) return false;

    // now to pass new Value get ths substring od the given string
    return recorsionPailndromeCheck(getMiddleCharcter(str.slice(1,-1)));
}

function firstCharacter(str) {
    return str[0];
}

function lastCharacter(str) {
    return str[str.length -1];
}

function getMiddleCharcter(str) {
    return str.slice(1-1);
}
console.log(recorsionPailndromeCheck("raca"));
