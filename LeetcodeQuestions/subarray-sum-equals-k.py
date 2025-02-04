def sub_array_sum_equals(nums:list,k:int):
    count = 0
    n = len(nums)
    for i in range(n):
        cum_sum = 0
        for j in range(i, n):
            cum_sum += nums[j]
            if cum_sum == k :
                count = count+ 1
    return count


def  optimal1(nums:list,k:int):
    count = 0
    has_map= {0:1} 
    cum_sum = 0
    for num in nums:
        cum_sum += num
        print(cum_sum - k )
        if cum_sum - k in has_map:
            count += has_map[cum_sum - k]

        has_map[cum_sum] = has_map.get(cum_sum,0)+1
    return count        


print(optimal1([1,2,3],3))
print(optimal1([1,1,1],2))



