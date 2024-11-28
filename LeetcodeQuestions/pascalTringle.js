function pasCalVariationOne(row, col) {
  let n = row - 1;
  let r = col - 1;
  let element = nCr(n, r);
  return element;
}

function nCr(n, r){
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
  }
  return res;
}
console.log(pasCalVariationOne(6, 3));

function pasCalVariationTwo(){

}
