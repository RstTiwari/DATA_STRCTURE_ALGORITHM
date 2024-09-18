let array =[{
    id:2
},
{
    id:5
},
{
    id:6
}

]
function find(ele){
    if(ele.id ===3){
        return ele
    }
}

// now implemnting the find meth
Array.prototype.customFind = function(callback){
 for(i= 0; i < this.length ; i++){
     if(callback(this[i],i, this)){
         return this[i]
     }
     return undefined
 }
}

console.log(array.customFind(find))
