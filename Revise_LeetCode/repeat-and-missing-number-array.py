def repeat_missing_number(array: list):
    n = len(array)
    m = len(array[0])
    missing, repeating = -1,-1
    for i in range(n):
        cnt = 0
        for j in range(m):
            if array[i] == array[j]:
                cnt += 1
            elif j not in array:
                missing = j
            if cnt == 2:
                repeating = array[j]
    return [missing, repeating]

def optimizied_solution(array):
    n = len(array)
    count = [0]*(1+n)
    for num in array:
        count[num] += 1
    
    missing , repeating = -1,-1
    for i in range(1,n+1):
        if count[i] == 2 :
            repeating = i
        if count[i] == 0:
          missing = i
    return [repeating,missing]


def optimized_solution_for_2d_matrix(array:list[list]):
    oneDim_array = [items for subArray in array for items in subArray]
    n = len(oneDim_array)
    count = [0]*(1+n)
    for num in oneDim_array:
        count[num] += 1
    
    missing , repeating = -1,-1
    for i in range(1,n+1):
        if count[i] == 2 :
            repeating = i
        if count[i] == 0:
          missing = i
    return [repeating,missing]
            
    
        



if __name__ == "__main__":
    nums = [3,1,2,5,3] 
    missing = optimizied_solution(nums)
    print(missing)
    nums2 = [[3,1],[2,5],[3,6]]
    ans2 = optimized_solution_for_2d_matrix(nums2)

# Time = O(n^2)  for two inner loop



  
    
