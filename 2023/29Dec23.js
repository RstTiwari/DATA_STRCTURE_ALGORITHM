const kidsWithCandies = function (candies, extraCandies) {
    //lets sort the array
    let greatest = Math.max(...candies);
    let result = [];
    let Obj = {}
    let i = 0;

    for(let i = 0 ; i < candies.length ; i++){
        if(candies[i] + extraCandies >= greatest){
            Obj[i] = true
        }else{
            Obj[i] = false
        }
    }   

    for (key in Obj) {
        result.push(Obj[key]);
    }
    return result

};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));

const  reverseVowels = function(s) {
   let regex = new RegExp(/[a,e,i ,o ,u ,A,E,I,O,U]/)
   let voweles =  s.split(regex)
   console.log(voweles);
};

console.log(reverseVowels("hello"))