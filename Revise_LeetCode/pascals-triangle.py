# Variation when row and col is given
def pascal_v1(n,r):
    res = 1
    for i in range(r):
        res  = res*(n-i)
        res = res//(i+1)
    return res


def nCr(n,r):
    ans = pascal_v1(n-1,r-1)
    return ans


# Variation 2 find the whole row

# naive approch

def pascal_v2_naive(row):
    res = []
    for i in range(1,row+1):
        res.append(nCr(row,i))
    return res
# Time Com - Big(n*row)
# Space Com - O(row)


# Better approch for
def pascal_v2_better(row):
    res = [1]
    ans = 1
    for i in range(1,row):
        ans   = ans*(row-i)
        ans = ans // i
        res.append(ans)
    return res

# Time Com - O(row)
# Space Com - O(row)


def pascal_v3_naive(row):
    res = []
    for i in range(1, row):
        tem = []
        for j in range(i):
            tem.append(nCr(i,j+1))
        res.append(tem)
    return res
# time come  - O(row*row*row) ~~ row^3

def pascal_v3_better(row):
    res = []
    for i in  range (1,row):
        res.append(pascal_v2_better(i))
    return res
    
# time com  =  O(n^2)
    


if __name__ == "__main__":
    r = 5
    c = 3
    ans = nCr(r,c)
    print("the resutlt is", ans)
    row = pascal_v2_naive(7)
    print("the whole row pascal_v2_naive is", row) 
    row1 = pascal_v2_better(7)
    print("the whole row pascal_v2_naive is", row1)
    row2 = pascal_v3_naive(7)
    print("the third version of naive solution is ",row2)
    row3 = pascal_v3_better(7)
    print("the third version of better solution is ",row3)
