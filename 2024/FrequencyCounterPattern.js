/**IF We have multiple Input To compare them we User Frequecy Paterrn */

//BigON should be must be O(N)

/**Checking if entred Two String are Valid Anagram or Not Same or Not */
function validAnagram(str1, str2) {
    const obj1 = {};
    const obj2 = {};
    for (let char in str1) {
        obj1[char] ? obj1[char] + 1 : (obj1[char] = 0);
    }

    for (let char in str2) {
        obj2[char] ? obj2[char] + 1 : (obj2[char] = 0);
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true
}

console.log(same("rohit","name"))


function frequencyCounter (num1,num2){
   const obj1 = num1.toString()
   const obj2 = num2.toString()

   for (item in num1){
    obj1[num1[item]] ? (obj1[num1[item]])+1 :0
   }

   for(item in obj2){
    
   }

}

console.log(frequencyCounter([]))