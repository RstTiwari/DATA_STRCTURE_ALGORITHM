// using tow pointer method to sort an array


function sortArray(num){
    let max = num[0]
    let cur = 0
    let next = 1

    while (next < num.length){
        if(num[next] < max){
            num[cur] = num[next]
            num[next] = num[cur]
            cur ++
        }
        next ++

    }
    console.log(num)
  
}

console.log(sortArray([2,1,2,5,9,-1]))