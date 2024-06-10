/// Learning The Recusrion Function 

const factorialRecursion  =(num)=>{
    if(num === 0) return 1
    return num* factorialRecursion(num -1)
}
console.log(factorialRecursion(3));

function reverseStringRecursion(string) {
    if (string.length <= 1) {
        console.log(string, "upper case");
        return string;
    } else {
        console.log(string, "LowerCase=", string[0]);
        const reversed = reverseStringRecursion(string.substring(1));
        console.log(reversed, "-", string[0]);
        return reversed + string[0];
    }
}

console.log(reverseStringRecursion("Rohit"));
