from typing import List
from collections import deque
def orangesRotting(grid) -> int:
    n = len(grid)
    m = len(grid[0])
    queue = deque()
    fresh = 0
    for  i in range(n):
        for j in range(m):
            if grid[i][j]==2:
                queue.append((i,j,0))
            elif grid[i][j]==1:
                fresh +=1
    direction = [(-1,0),(0,1),(1,0),(0,-1)]
    time = 0
    print(fresh)
    
    
    while queue:
        r,c,t = queue.popleft()
        time = max(time,t)
        for dr,dc in direction:
            nr ,nc =r+dr, c +dc 
            if 0 <= nr < n  and 0 <=nc < m and grid[nr][nc] ==1:
                grid[nr][nc] = 2
                fresh -= 1
                queue.append((nr,nc,t+1))
    print(fresh)
    
    if fresh >0:
        return -1
    else:
      return time
    
 

print(orangesRotting(
  [
    [2,1,1],
    [1,1,0],
    [0,1,1]
  ]
 ))
    

    
            


        