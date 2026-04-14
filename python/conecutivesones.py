from typing import List


class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        start = 0
        end = 1
        count = 0
        while end > len(nums):
            if nums[start] ==1 and nums[end]==1:
                print(start ,end)
                count +=1
                start +=1
                end +=1
            start +=1
            end += 1
        return count

sol = Solution

num = [1,1,0,1,1,1]
count = sol.findMaxConsecutiveOnes(num)
print(count)
                
            
        
        