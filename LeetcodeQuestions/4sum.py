def optimal_solution(nums:list[int],target:int):
    n = len(nums)
    result = []
    nums.sort()

    for i  in range(n-3):
        if i > 0  and nums[i] == nums[i -1]:
            continue
        #second loop to keep the track
        for j in range(i+1 ,n-2):
            if j > i + 1 and nums[j] == nums[j-1]:
                continue
            # now we ill use two pointer  algorithm to check ahead things
            left = j +1
            right = n -1
            while left < right:
                current_sum = nums[i] + nums[j] + nums[left] + nums[right]
                if current_sum == target:
                    result.append([nums[i],nums[j],nums[left],nums[right]])
                    #going forward i have to check  duplicated for left and right values as well
                    while left < right and nums[left] == nums[left+1]:
                        left = left + 1
                        continue

                    while left < right and nums[right] == nums[right-1]:
                        right = right -1
                    left +=1
                    right -= 1

                elif current_sum > target:
                    right -=1
                else:
                    left += 1

    return result   


print(optimal_solution([1,0,-1,0,-2,2],0))
print (optimal_solution([-3,-2,-1,0,0,1,2,3],0))



            