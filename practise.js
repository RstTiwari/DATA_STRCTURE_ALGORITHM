function encryptString(str, num) {
    // first joined the string
    let joinedString = str.replaceAll(" ", "_").split("");

    // iterate over the string string
    for (let i = 0; i < joinedString.length; i++) {
        // if its white space
        if (joinedString[i] == "_") {
            continue;
        }

        // else continue with logic
        let temChar = joinedString[i];
        // now managing the Code point of last Alphabet

        let codePoint = temChar.codePointAt(0) + num;
        let updateChar = String.fromCodePoint(codePoint);
        joinedString[i] = updateChar;
    }
    
    // now let convert back the array into string
    let temString = joinedString.join("").replaceAll("_"," ")
    console.log(temString,"===")
    return temString;
}  




console.log(encryptString("Hello World", 2))

function expect(actual){
   return {
       toBe: function(expected) {
        return `Test ${actual === expected ? 'Passed' : 'Failed'}`
      }
   }
}

console.log(expect(encryptString("Hello World", 2)).toBe("Jgnnq Yqtnf"))
console.log(expect(encryptString("I love to code", 4)).toBe("M pszi xs gshi"))
console.log(expect(encryptString("Javascript is an awesome language", 6)).toBe("Pgbgyixovz oy gt gckyusk rgtmagmk"))
