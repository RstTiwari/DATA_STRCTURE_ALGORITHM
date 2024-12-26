from collections import Counter

def better_approach(nums:list):
     n = len(nums)
     result = []
     counter = Counter(nums)
     for num, val in counter.items():
        if val > n / 3:
            result.append(num)
     return result    


print(better_approach([1,2]))