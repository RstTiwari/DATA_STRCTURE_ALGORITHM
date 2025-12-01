from typing import *
def findMissingAndRepeatingValues(mat:List):
    n = len(mat)*len(mat[0])
    dic = {}
    for row in mat:
        for val in row:
            if val in dic:
                dic[val]+=1
            else:
                dic[val] =1
    repeating = 0
    missing =  0
    for i in range(1,n+1):
        if dic.get(i,0)== 2:
            repeating = i
        elif dic.get(i,0)== 0:
            missing = i
    return [repeating, missing]

repeating = findMissingAndRepeatingValues([[9,1,7],[8,9,2],[3,4,6]])
print(repeating)
    