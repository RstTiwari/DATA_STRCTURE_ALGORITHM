def brute_force_approach(nums:list,target:int):
    n = len(nums)
    length = float("inf")
    sum = 0
    start = 0
    i = 0
    while i < n:
        sum =+ nums[i]
        if sum >= target:
            tem_length = i - start +1
            length = min(length,tem_length)
            start = start +1
        i += 1
      
    return length        


print(brute_force_approach([2,3,1,2,4,3],7))