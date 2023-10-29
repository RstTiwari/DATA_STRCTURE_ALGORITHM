let num = 5
console.log( typeof num );

let newString = "b" 


// chatCodeAt
console.log(newString.charCodeAt(3),newString.charAt(3))
console.log(newString.charCodeAt(0))

//codePointAt
const str = "iamtheTiwari";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(30));
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
