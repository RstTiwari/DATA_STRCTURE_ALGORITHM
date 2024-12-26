def most_optimal_solution(nums:list):
    n = len(nums)
    elem = 0, 
    count =0

    for i in range(n):
        if count == 0:
            elem = nums[i]
            count += 1
        elif elem == nums[i]:
            count = count +1
        else:
            count = count -1 
    return elem


print(most_optimal_solution([2,2,1,1,1,2,2]))
print(most_optimal_solution([6,5,5]))
        


