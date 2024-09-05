function superDigit(n, k) {
    // Base condtion n = 1  && k = 1 return n
    // Recursive condtion
    // function concatN return contacted n for k times
    // function sumTheNumber which return sum of all number

    //Base condtion
    if (n <= 1 && k === 1) {
        return n;
    }
    const oneSum = sumTheDigit(n.toString());
    console.log(oneSum);

    const mulSum = oneSum.toString() * k;
    return reduceToOneDigit(mulSum);
}

function sumTheDigit(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }
    return sum;
}

function reduceToOneDigit(sum) {
    // Base Condtion for this Method
    while (sum >= 10) {
        sum = sum
            .toString()
            .split("")
            .reduce((sum, digt) => sum + parseInt(digt), 0);
    }

    return sum;
}

superDigit(9875, 4);
