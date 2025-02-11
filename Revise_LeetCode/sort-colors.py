def merge_sorted_array(left, right):
    sorted_array = []
    while left and right:
        if left[0] < right[0]:
            sorted_array.append(left.pop(0))
        else:
            sorted_array.append(right.pop(0))
    sorted_array.extend(left)
    sorted_array.extend(right)
    return sorted_array


def naive_solution(array:list):
    # checking for the base condition
    if len(array) <=1:
        return array

    mid = len(array) // 2
    left = naive_solution(array[:mid])
    right = naive_solution(array[mid:])
    return merge_sorted_array(left, right)
# Time = O(nlog(n))   where n is numbers of array and log(n)  merge sort algorithm


def optimal_solution(nums):
    zero = 0
    one = 0
    two = 0
    for i in nums:
        if i == 0:
            zero += 1
        elif i == 1:
            one += 1
        elif i == 2:
            two +=1
    for i in range(0, zero):
        nums[i] = 0
    for i in range(zero, one+zero):
        nums[i] = 1 
    for i in range(one+zero, one+ two+zero):
        nums[i] = 2
    return nums

# Time = n^2   where n is numbers of array

def better_solution(nums):
    low = 0
    high = len(nums) - 1
    mid = 0
    while mid < high :
        if nums[mid] == 0:
            nums[mid] , nums[low] = nums[low] ,nums[mid]
            low +=1
            mid+= 1
        elif nums[mid] == 1:
            # do nothing
            mid +=1
        elif nums[mid] == 2:
            nums[high] ,nums[mid] = nums[mid] ,nums[high]
            high -=1
    return nums

# Time = O(n)  where n is numbers of array

            


class Solution:
    def sortColors(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # checking for the base condition
        if len(nums) <=1:
            return nums

        mid = len(nums) // 2
        left = self.sortColors(nums[:mid])
        right = self.sortColors(nums[mid:])
        return self.merge_sorted_array(left, right)

    def merge_sorted_array(self,left, right):
        sorted_array = []
        while left and right:
            if left[0] < right[0]:
                sorted_array.append(left.pop(0))
            else:
                sorted_array.append(right.pop(0))
        sorted_array.extend(left)
        sorted_array.extend(right)
        return sorted_array


if __name__== "__main__":
    nums = [1,0,2,1,1,0]
    solution = Solution()
    sorted_array = better_solution(nums)
    print(sorted_array)
