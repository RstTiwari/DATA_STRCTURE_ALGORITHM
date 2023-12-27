let num = 5
console.log( typeof num );
let newString = "b" 

/**
 * @async
 * String.at
 */
let has = [];
function hasing(string) {
    for (let i = 0; i < string.length; i++) {
        has.push(string.codePointAt(i));
    }
    return has;
}

console.log(hasing("rohit"));

function unHashing(array){
  let str =  String.fromCodePoint(...array)
  return str
 
}

console.log(unHashing[has])
// chatCodeAt
console.log(newString.charCodeAt(0),newString.charAt(0),"--")
console.log(newString.charCodeAt(0))

//codePointAt
const str = "iamtheTiwari";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i));
} /**
this meothod is not recommedned for using  */
let hashed = []
for(const point of str){
    hashed.push(point.charCodeAt(0).toString(16))
}
console.log(hashed ,"---")
let unhased = ''
for(let code of str){
    unhased += code.charAt(0)
}
//concat
let conCat = "  ".concat("  ")
console.log(conCat.codePointAt(0),"---")

//endsWith
String.prototype.endsWith("searchString","postion") // where postion is optional
console.log(str.endsWith("h",6));  // last char is char index + 1

//fromCharCode
String.fromCharCode()
console.log(String.fromCharCode(34));
let unhased2 = [];
for (let key of hashed) {
    unhased2.push(String.fromCharCode(key).toString(16));
}
 console.log(unhased2);

 //includes
 String.prototype.includes("searchString","postion")
 const sentence = 'The quick brown fox jumps over the lazy dog.';
 console.log(sentence.includes(undefined));

 //indexOff
 String.prototype.indexOf("searchString","postion") // Return index
 console.log(sentence.indexOf(null,9)); // returns -1
 console.log(sentence.indexOf("k",20)); // return -1

 //lastIndexOff
 String.prototype.lastIndexOf("searchString","position")
 let string1 = "lastindexString"
 console.log(string1.lastIndexOf("g")); // return 14
 console.log(string1.lastIndexOf("g" ,4)); // return -1 
 /*
 * bacasue none "g" matches at postion lessthan 
  or equal to 4 
  */

console.log(string1.lastIndexOf("last")); // 0 from where String starts its alawys Gives that Value

//localComapre()
String.prototype.localeCompare('compareString',"locales","options");
"a".localeCompare("a")  // 0 yelding neutral Vlaue
let studentName  = ["rohit" ,"Rohit","durgesh","namesh"]
studentName.sort((a,b)=> a.localeCompare(b,"EN",{ ignorePunctuation: true }))
console.log(studentName);

//match
String.prototype.match("regexExpression") 
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.'
let regex = /[A-Z]/g  // will Match all the value through the String
console.log(paragraph.match(regex));
let regex2  = /[A-Z]/  // will match only the first character
console.log(paragraph.match(regex2));
const str3 = "For more information, see Chapter 3.4.5.1";
let regex3 = /\d\./i;
console.log(str3.match(regex3));


String.prototype.matchAll("regexExpression"); // return array matching Value 
let matchAllString = "testee1testeeee2"
let matchAllReg = /t(e)*\d/g
let matchAllArrry = [...matchAllString.matchAll(matchAllReg)]
console.log(matchAllArrry);


String.prototype.normalize("NFD")  // return normalizes the char which has assigned a diffrent Unicode point
let norString1 = "\u00F1"; // ñ
let norString2 = "\u006E\u0303"; // ñ


String.prototype.padEnd("targetLength", "charchter")  // return the paddeded Strign at the 



String.prototype.padEnd("targetLength for String", "charchter")  // return the paddeded Strign at the endofString
let padString = "the new Paragrph is equeat ot the"
console.log(padString.padEnd(50,"-"));
console.log("10".padEnd(20,"--"));
console.log("rohit".padEnd(2,"---"));
let padString2 = ""
console.log(padString2.length);
let newPadString = padString2.padEnd(20,"-")  // does not changes the Value of original String
console.log(newPadString.length);


String.prototype.padStart("maxLength","fillString")  // return the padded  Strings at sthe start
let padString3 = "the new Paragrph is equeat ot the"
console.log(padString3.padStart(36,padString));


//String.row() // getting raw stign  without eacasping the / slash and all


String.prototype.repeat()
console.log("abe".repeat(7));
console.log("abe".repeat());

String.prototype.search("regexExpression")  // returns the index of the First match other wise return -1 
let searchString = "iam the leader of this given owrld which can take care of thing which are not presnet in there for the use ! *"
console.log(searchString.search(/[^ \w\s]/));   // not a word or white space or not a astropic word
console.log(searchString[searchString.search(/[^\w\s]/)]);


String.prototype.slice("indexStart","indexEnd")  // returns
let sliceString = "You now who am i"
console.log(sliceString.slice(1));


String.prototype.split("seprator","limit")  // returns  array of String  with each value;
const splitString = 'The quick brown fox jumps over the lazy dog.';
console.log(splitString.split(" ")[0][0]);

String.prototype.startsWith()

String.prototype.toLocaleLowerCase()

String.prototype.valueOf("")  // returns the value given value given



