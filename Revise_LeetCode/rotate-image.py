def rotate_image_naive_solution(array:list[list]):
    m = len(array)
    n = len(array[0])
    rotated = [[0 for _ in range(n)] for _ in range(n)]
    print(m,n,rotated)
    
    for i in range(m):
        print(array[i])
        for j in range(m):
            rotated[j][m-i-1] = array[i][j]
        
    print(rotated)
    return rotated




def rotate_image_optimal(array:list[list]):
    m  = len(array)
    for i in range(m):
        for j in range(i):
            array[i][j],array[j][i] = array[j][i],array[i][j] 
            
    print(array)
    for i in range(m):
        array[i].reverse()
        
    return array

if __name__ =="__main__":
    array = [[1,2,3],[4,5,6],[7,8,9]]
    rotated = rotate_image_optimal(array)
    print(rotated)
