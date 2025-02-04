def mark_row(mat:list,m ,n , row ):
    for col in range(n):
        if mat[row][col] != 0:
            mat[row][col] = -1
    print(mat)

    


def mark_col(mat:list,m, n, col):
    for row in range(m):
        print(row,col)
        if mat[row][col] != 0:
            mat[row][col] = -1
    print(mat)


def brute_force (mat):
    m = len(mat)
    n = len(mat[0])

    for i in range (m):
        for j in range(n):
            if mat[i][j] == 0:
                print(mat[i][j])
                mark_row(mat,m ,n ,i)
                mark_col(mat,m,n,j)
              
    
    for i in range(m):
        for j in range(n):
            if mat[i][j] == -1:
               mat[i][j] = 0

    return mat



# in  this method there is still  a cache for writing the code like ,it's to some edd case are there
"""
TIME BIG O(n)  for this   n2 + n + M 
SPAce BIH O(n) = 0

"""
# print(brute_force(
#     [
#     [0,1,2,0],
#     [3,4,5,2],
#     [1,3,1,5],
#     ]))


# print(brute_force([[0,1]]))
# print(brute_force(
#     [[0],
#      [2],
#      [3]]
#      ))
# print(brute_force([[-1],[2],[3]]))


def better_solution (mat:list[list[int]]):
    m = len(mat)
    n = len(mat[0])
    row =  [0]*m
    col = [0]*n
    for i in range(m):
        for j in range(n):
            if mat[i][j] == 0:
                row[i] = 1
                col[j] = 1
    for i in range(m):
        for j in range(n):
            if row[i] == 1 or col[j] ==1:
                mat[i][j] = 0
    return mat

# print(better_solution(
#     [[0],
#      [2],
#      [3]]
#      ))
print(better_solution([[-1],[2],[3]]))








