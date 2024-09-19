const data = [
    { id: 1, name: "A", children: [
        { id: 2, name: "B" },
        { id: 3, name: "C", children: [
            { id: 4, name: "D" }
        ] }
    ] },
    { id: 5, name: "E" },
    { id: 6, name: "F", children: [
        { id: 7, name: "G" }
    ] }
];

Array.prototype.customFindIndex =function(callBack){
    for(i =0 ; i < this.length ; i++){
        if(callBack(this[i],i ,this)){
            return i
        }
 
    }
    return -1
}

// fot making values more dynamical
function findIndex2(ele,dynamicCon){
    if(ele?.children?.length >0){
      let childIndex =  ele.children.customFindIndex((ele)=> findIndex2(ele,dynamicCon))
      if(childIndex !== -1){
          return true
      }
    }
     if(ele.id === dynamicCon){
            return true
        }
     return false
    
}

console.log(data.customFindIndex((ele)=>findIndex2(ele,4)))
