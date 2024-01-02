const reverseVowels = function(s) {
    let i = 0 ;
    let j = s.length - 1 ;
    let regex = new RegExp(/[aeiouAEIOU]/)
    let str1 = s.split("")
    while(i < j){
        if(!regex.test(str1[i])){
            i++
           continue
        }

        if(!regex.test(str1[j])){
            j--;
            continue
        }

        let temStr = str1[i];
        str1[i] = str1[j];
        str1[j] = temStr
        i++
        j--
    }
    let str2 = str1.join("")
    return str2
}

console.log(reverseVowels("a.b,."))
// rohit
// i   j
//  i j

var productExceptSelf = function(nums) {
    for(let i = 0 ;  i < nums.length ; i++){
        let newValue = nums.slice(1)
        console.log(newValue)
    }
};

console.log(productExceptSelf( [1,2,3,4]))
