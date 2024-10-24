    const bundleArr = (arr, n) => {
        let output = []
    if(arr.length <= 0){
        return arr
    }
    output.push(arr.splice(0,n))

      return output.concat(bundleArr(arr,n))
    }
    
    const input1 = [1,2,3,4,5,6,7,8,9];
    console.log('Input 1: ', bundleArr(input1, 3));
    
    
