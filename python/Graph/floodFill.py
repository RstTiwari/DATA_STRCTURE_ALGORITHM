from typing import List

class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        intialColor = image[sr][sc]
        ans = [row[:] for row in List] # doing the deep copy of this
        delRow = [-1,0,1,0]
        delCol = [0,1,0,-1]

        self.dfs(self, sr,sc, image ,ans ,delRow,delCol,intialColor,color )
        return ans   

    def dfs(self,sr,sc, image, ans, delRow, delCol,intalColor,color):
        ans[sr][sc] = color
        for i in range(4):
            nRow = delRow[0]
            nCol = delCol[0]
            if nRow < 0 < len(image) and nCol < 0 < len(image[0]) and image[nRow][nCol] == intalColor and image[nRow][nCol] != color:
                self.dfs(self,nRow,nCol,image,ans,delRow, delCol,intalColor,color) 


if __name__ =="main":
    sol = Solution
    image = [[1,1,1],[1,1,0],[1,0,1]], 
    sr = 1,
    sc = 1, 
    color = 2
    ans = sol.floodFill(image,sr,sc, color)
    print(ans)


