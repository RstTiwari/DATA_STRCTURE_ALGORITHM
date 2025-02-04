let index = [1,5,9,63,87]

Array.prototype.customFindIndex =function(callBack){
    for(i =0 ; i < this.length ; i++){
        if(callBack(this[i],i ,this)){
            return i
        }
 
    }
    return -1
}

function findIndex (ele){
    if(ele% 2== 0){
        return true
    }else{
        return false
    }
}

console.log(index.customFindIndex(findIndex))

// fot making values more dynamical
function findIndex2(ele,dynamicCon){
    if(ele ===dynamicCon){
        return true
    }else{
        return false
    }
}

console.log(index.customFindIndex((ele)=>findIndex2(ele,9)))
