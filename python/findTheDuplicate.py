from typing import *
def findTheDuplicate(list:List):
    dup = dict()
    for num in list:
        if dup.get(num):
            dup.update({num:dup.get(num)+1})
        else:
            dup.update({num:1})
    ans = []
    for key in dup :
        if(dup[key] > 1):
            ans.append(key)
    return ans


ans  = findTheDuplicate([-1,1,-1,1])
print(ans)    
