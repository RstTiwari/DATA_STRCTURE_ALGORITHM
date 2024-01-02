// PRITNNG THE REVERSE OF WORD IN N

const reverseWords = function(s) {
    let regex = new RegExp(/  +/g)
    return s.replaceAll(regex," ").trim().split(" ").reverse().join(" ")
}

console.log(reverseWords( "a good   example"))