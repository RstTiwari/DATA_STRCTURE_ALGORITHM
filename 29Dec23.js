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
