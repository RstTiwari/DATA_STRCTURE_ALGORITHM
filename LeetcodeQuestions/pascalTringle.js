function pasCalVariationOne(row, col) {
  let n = row - 1;
  let r = col - 1;
  let element = nCr(n, r);
  return element;
}

function nCr(n, r) {
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
  }
  return res;
}
//console.log(pasCalVariationOne(5, 3));

// finding the entire nth row
function pasCalVariationTwo(n) {
  let row = "";
  for (let c = 1; c < n; c++) {
    console.log(nCr(n - 1, c - 1), "=");
  }
  return row;
}

//console.log(pasCalVariationTwo(5));

function pasCalVariationThreeNaive(rowNumber) {
  let result = [];

  for (let row = 1; row <= rowNumber; row++) {
    let temArray = [];
    for (let col = 1; col <= row; col++) {
      let ele = nCr2(row - 1, col - 1);
      temArray.push(ele);
    }
    result.push(temArray);
  }

  return result;
}

function nCr2(n, r) {
  let res = 1;
  for (let row = 0; row < r; row++) {
    res = res * (n - row);
    res = res / (row + 1);
  }
  return res;
}

console.log(pasCalVariationThreeNaive(0));

function pasCalVariationThreeOptimal(totalRow) {
  let res = [];
  for (let row = 1; row <= totalRow; row++) {
    res.push(genrateRow(1));
  }
  return res;
}

function genrateRow(row) {
  let ans = 1;
  let res = [1]; // put the first vale
  for (let col = 1; col < row; col++) {
    ans = ans * (row - col);
    ans = ans / col;
    res.push(ans);
  }
  console.log(res, "==");
  return res;
}
console.log(pasCalVariationThreeOptimal(1));
