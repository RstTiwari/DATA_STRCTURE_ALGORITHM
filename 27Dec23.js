const canPlaceFlower = (flowerBed, n) => {
    let count = 0;
    for (let i = 0; i < flowerBed.length; i++) {
        if (count === n) return true;
        let left = flowerBed[i];
        let center = flowerBed[i + 1];
        let right = flowerBed[i + 2];
        if (left !== center && center !== right) {
            count += 1;
        }
    }
    return false
    

    
};

console.log(canPlaceFlower([1,0,0,0,0,0,1], 2));
// console.log(canPlaceFlower([0,1,0,0,0],1))