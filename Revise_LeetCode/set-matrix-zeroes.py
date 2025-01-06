def mark_row(mat:list,m ,n , row ):
    for col in range(n):
        if mat[row][col] != 0:
            mat[row][col] = -1
    print(mat)

    


def mark_col(mat:list,m, n, col):
    for row in range(m):
        if mat[row][col] != 0:
            mat[row][col] = -1


def brute_force (mat):
    m = len(mat)
    n = len(mat[0])

    for i in range (m):
        for j in range(n):
            if mat[i][j] == 0:
                mark_row(mat,m ,n ,i)
                mark_col(mat,m,n,j)
    for i in range(m):
        for j in range(n):
            if mat[i][j] == -1:
               mat[i][j] = 0

    return mat



print(brute_force(
    [
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5],
    ]))


print(brute_force([[0,1]]))
print(brute_force(
    [[0],
     [2],
     [3]]
     ))




