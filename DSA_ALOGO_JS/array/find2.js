const books = [
    { title: "Book A", author: "Author X", ratings: [4.5, 4.2, 4.8] },
    { title: "Book B", author: "Author Y", ratings: [4.7, 4.1, 4.3] },
    { title: "Book C", author: "Author X", ratings: [4.9, 4.6, 4.8] },
    { title: "Book D", author: "Author Z", ratings: [3.5, 3.9, 4.0] }
];

function find(ele){
    if(ele.author ==="Author X"){
        let avgrating = ((ele.ratings.reduce((sum,rating)=> sum+rating,0))/ ele.ratings.length)
        console.log(avgrating)
        if(avgrating > 4.2 ){
            return ele
        }
    }
}

//now implemnting the find method
Array.prototype.customFind = function(callback){
 for(i= 0; i < this.length ; i++){
     if(callback(this[i],i, this)){
         return this[i]
     }
     return undefined
 }
}

console.log(books.customFind(find)
