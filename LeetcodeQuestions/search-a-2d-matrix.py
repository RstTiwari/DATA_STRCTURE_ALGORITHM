def bruteForceApproach (mat, target):
    m = len(mat)
    print(mat[0],"==")
    n = len(mat[0])
    for i in range(m):
        for j in range(n):
            if mat[i][j] == target:
                return True
    
    return False


print(bruteForceApproach([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) # True


def optimal_solution_one (mat ,tar):
    m =len(mat)
    n = len(mat[0])
    for i in range(m):
        if mat[i][0] <= tar and tar <= mat[i][n -1]:
            return binarysearch(mat[i],tar)
        
    
    return False


def binarysearch(arr,tar):
    low = 0
    high = len(arr)-1

    while low <= high:
        mid = (low +high)// 2
        if arr[mid] == tar:
            return True
        elif arr[mid] < tar :
            low = mid +1
        else:
            high = mid -1

    return False    


# print(optimal_solution_one([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
print(optimal_solution_one([[1],[3]],3))

# Time complexity =  O(N + log(M))  N is num of row an log(M) is binary search complexity
# space complexity O(1)

