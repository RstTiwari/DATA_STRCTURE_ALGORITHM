/**
 * 1) at(index)
 * @param takes a index a integer value;
 * @returns char at that index
 *
 */

const stringAt = "name is Rohit Tiwari";
console.log(stringAt.at(0));

/**
 * 2) chatAt(index)
 * @param index
 * @returns char at that index
 */

console.log(stringAt.charAt(3), "---");

/**
 * 3) charCodeAt(index)
 * @param index
 * @returns charCode of UTF16 at that index
 */
console.log(stringAt.charCodeAt(2)); // basically we are findingthe code unit at thee given index

/**
 * 4) charCodePointAt(index)
 * @param index
 * @returns  a non negative integer respresting the code point value of char
 */
const smile = "🙂";
console.log(stringAt.codePointAt(2)); //
console.log(smile.charCodeAt(1));
console.log(smile.codePointAt(1)); // basically codePoint and charCodeAt() bothe give code unit at that point the o
// but codePointAt() deals with UTF16 in much better ways to so better to use that

/**
 * 5) concat(str1,str2,str3 ....strN)
 * @param string take N number of string
 * @returns newString concating the all vlaues
 */

const concatString = "lets ad the new String here";
console.log(stringAt.concat(" ", concatString)); // name is Rohit Tiwari lets ad the new String here
const concateArray = ["Rohit", "kumar", "tiwari"];

const conctedArrayString = concatString.concat(concateArray);

console.log(concatString.concat(concateArray));

console.log(conctedArrayString, typeof conctedArrayString); // lets ad the new String hereRohit,kumar,tiwari ,string

console.log("".concat(concatString, concateArray)); //lets ad the new String hereRohit,kumar,tiwari

console.log("".concat({})); // [Obj,obj] =>>>>>>   why its  bahaving like this show below example

const addres = { area: "vasai", state: "maharashtra" };
console.log(addres.toString()); // [obj,obj] => memory refrence in javascript

console.log("".concat([])); // ""  nothing

const concateNull = null;
console.log(typeof null, typeof undefined, "--");
const concatedNullwithString = "".concat(null);
console.log(typeof concatedNullwithString); // "null" => basically it converts null into string null

/**
 * endsWith(searchString,endPostion)
 * @param searchString,
 * @returns true or False
 */

const endsWithString = "Let the new Value of the type End With ";
console.log(endsWithString.endsWith(" new", 10)); // end position looks for exactly at that postion for the values;

/**********************Next Two methods are simpley Static method which deala with UTF16 code unit Point */

/**
 * formCharCodeAt(num1,num2,num3,num4,num5,.....numN) ;
 * @param takes n number of code unit 0f UTF16  to check
 * @returns give the
 */

const charCodeString = "Rohit with";
console.log(String.fromCharCode(65));

/**
 * fromCodePoint(num1,num2,num3,num4,num4,num5 ,....numN)
 * @param takes n number code units
 * @returns char at that code unit      //====>>> both formCharCode() and fromCodePoint() are works same only deiffrence is with
 */

/*****------------------------------------------------ */

/**
 * includes(str,postion)
 * @param str  position takes string as parameter
 * @ position is point from which it start searching // ====> difffenr as copmare to to endWith position
 * @returns true or fall it's case sensitive
 */
const includeString = "the new name of me";
console.log(includeString.includes("o", 13)); // true

/**
 * indexOff(str,position)
 * @param str ,postion(optional)  /// take str or char , with postion
 * position => its start searching from index greater or equla to postion
 * @returns returns the index of that string
 */

const indexOffString = "the rohit ball the given value";
console.log(indexOffString.indexOf("roh")); // 4
console.log(indexOffString.indexOf("roh", 4)); // 4
console.log(indexOffString.indexOf("roh", 5)); // -1 // NotFound in the String

/**
 * lastIndexOff(str,postion)
 * @param str ,postion(optional) // takes str and position
 * postion returns the last occurenace  before that index
 * @returns index of the occurance
 */

const lastIndexOffString = "the new Rohit ball and bat";
console.log(lastIndexOffString.lastIndexOf("b", 20));

/**
 * isWellFormed()  //take no input
 * @param None //take no input
 * @returns  true or false
 *
 *
 * */

const illFormed = "https://example.com/search?quD800";

console.log(encodeURI(illFormed)); // throw error  URIError: URI malformed ;

/**
 * localCompare()  // Compares the vlaue for localcompare
 */

/**
 * match(regexExp)
 * @param takes regexExp eg /[a-z]/
 * @returns [ char,char ,char] return
 */

const regexExp = /[aA-zZ, d]/g;
console.log("the new Vlaue match".match(regexExp)); // [t,h,e ,n,e,w,V]

/**
 * matchAll(regexExp)
 * @error will throw error if g is not passed
 * @param takes regexExp
 * @returns ["char",car]
 */
console.log("the new house".matchAll(regexExp)); // return ittator object
// very rare  for use

/**
 * padEnd(targetLength ,padString)
 * @param targetLength is length of string after being padded sholud always greate that string length
 * @param padString  is string the will attach at the end eg rohit....
 * @returns String  the paded new String value
 */

let padString = "the new Name for the area of Object";
console.log("the new Value for the value".padEnd(30, "..."));

console.log("abc".padEnd(5, "-"));

/**
 * padStart(targetLength,padString)
 * @param targetLength   is length of String after being paddded always grrwater thatn originla String lenght
 * @param padString  is the new String that is going to padded to the Given String
 */

console.log(padString.padStart(40, "---"));

/**
 *repeat(count)  
 @param  count is number to string is going to repeat 
 @returns new string to with reapeted count of string
 */

const repeatString = "New Repeat";
console.log(repeatString.repeat(8));

/**
 * replace(pattern,replacement)
 * @param pattern ==>  it can be string or regex expresion to find out in the bigger string;
 * @param replacement ===>  its small string  to replace in the bigger string
 * @returns String  ===> it returns new String does not mutate the old String old remains the same
 *
 */
const replaceString = "i love apples and oranges";
console.log(replaceString.replace("", "--")); // regex is empty its just add the value on the frontend side;

console.log(replaceString.replace(" ", "New")); // replce the first accurance

console.log(replaceString.replace(/[a-z]/, "A")); //Ahe new Text for replcing
console.log(replaceString.replace(/f/, "$$")); // the new Text $or replcing   // will never be used

const updateReplaceString = replaceString.replace(/apples/, "$& bananas");
console.log(updateReplaceString); //i love apples bananas and oranges

console.log(replaceString.replace(""));

const replaceRegexGlobal = /apples/gi;
const replaceGlobalString =
    "i love the Apples and small apples also the Big aPPles";
console.log(replaceGlobalString.replace(replaceRegexGlobal, "oranges"));

/**===================same as replace button========================= */

/**
 * replaceAll(pattern,replacment)
 * @param pattern ==> pattern that matches substring in bigString
 * @param replacement ==> small string that replace the matched
 */

/**
 * search(regex)
 * @param regex ==> regex epression to find the the valaue
 * @returns first index of matched value
 *  g has not effect in search it's gives first index
 *  test(regex) ==> use this method if want to check present or not as it give boolean value
 *  match(regex)  ==> use this if want to find the value of matched stirng
 */

const searchString =
    "the search point is the most amzing thing to ever happend";
console.log(searchString.search("point")); // 11 index of matched value
console.log(/point/.test(searchString));

/**
 * slice(startIndex,endIndex)
 * @param startIndex the value at which to start it will be included in newstring
 * @param endIndex the value at which to end the string , it will not be included in newString
 */

const sliceString = "the slice string that is going to be sliced";
console.log(sliceString.slice(1));

/**
 * split()
 */

/***======================== slice and substring arethey both are same   with slight diffrence in both the thing*/
/**
 * substring(startIndex,endIndex)
 * @param startIndex
 * @param endIndex
 * @returns new sring without changin the original onee
 * => it doesn't take minus index and just swwipe up the value
 */

const substringString = "the new sunstring text";
const substring1 = substringString.substring(2, -3); //th
const substring2 = substringString.slice(2, -3); //e new sunstring t

console.log(substringString, "--", substring1, "--", substring2);



