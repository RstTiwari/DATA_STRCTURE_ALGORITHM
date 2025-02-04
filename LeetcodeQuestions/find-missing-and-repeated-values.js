function bruteForApproach(grid) {
  grid = grid.flat();
  let has = new Map();
  console.log(grid);
  let n = grid.length;

  for (let i = 0; i < n; i++) {
    if (has.has(grid[i])) {
      has.set(grid[i], ((has.get(grid[i])) + 1));
    } else {
      has.set(grid[i] ,1);
    }
  }

  let missing = 0 
  let repeating = 0
  console.log(has)
  for(let  i  = 1 ; i <= n ; i++){
     if(has.get(i) == 2){
        repeating = i;
     }
     if(!has.get(i)){
        missing = i;
     }
  }

  return [repeating,missing]
}

console.log(
  bruteForApproach([
    [1, 3],
    [2, 2],
  ])
);

console.log(bruteForApproach([[9,1,7],[8,9,2],[3,4,6]]))