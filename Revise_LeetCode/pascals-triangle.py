#Variation when row and col is given
def pascal_v1(n,r):
    res = 1
    for i in range(r):
        res  = res*(n-i)
        res = res//(i+1)
    return res


def nCr(n,r):
    ans = pascal_v1(n-1,r-1)
    return ans




#Variation 2 find the whole row 

#naive approch

def pascal_v2_naive(row):
    res = []
    for i in range(1,row+1):
        res.append(nCr(row,i))
    return res
#Time Com - Big(row)
# Space Com - O(row)


# Better approch for 
def pascal_v2_better(row):
    res = []
    ans = 1
    for i in range(1,row):
        ans   = ans*(row-i)
        ans = ans // i








if __name__ == "__main__":
    r = 5
    c = 3
    ans = nCr(r,c)
    print("the resutlt is", ans)
    row = pascal_v2_naive(7)
    print("the whole row is", row) 
