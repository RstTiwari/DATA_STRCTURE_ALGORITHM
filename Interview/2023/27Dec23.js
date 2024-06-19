const canPlaceFlowers = (flowerBed, n) => {
    let count = 0;

    for(let i = 0; i < flowerBed.length; i++) {
        if(
            (flowerBed[i] === 0) && 
            ( i === 0 || flowerBed[i-1] === 0) &&
            (  i === flowerBed.length - 1 || flowerBed[i + 1] === 0 )
            ) {
                flowerBed[i] = 1;
                count++;
            } 

        if(count >= n) return true;
    }

    return false;

}

const canPlaceFlowers2 = (flowerBed, n) => {
    let count = 0 , i = 0;
     while (i < flowerBed.length){
         if (
             (flowerBed[i] === 0) &&
             (i === 0 || flowerBed[i - 1] === 0) &&
             (i === flowerBed.length - 1 || flowerBed[i + 1] === 0)
         ) {
             count += 1;
             i += 2;
         } else {
             i += 1;
         }
         if(count >= n)  return true
     }
     

    return false;

}



//console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)); 
console.log(canPlaceFlowers2([0,0,1,0,0,0 ,0],1))
console.log(canPlaceFlowers2([1,0,0,0,1,0,0],2))
