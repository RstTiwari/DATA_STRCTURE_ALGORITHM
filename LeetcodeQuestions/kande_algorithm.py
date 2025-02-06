import sys


def max_sum_sub_array(nums: list):
    max_sum = -sys.maxsize - 1
    sum = 0
    start = 0
    ansStart = -1
    ansEnd = -1
    for i in range(len(nums)):
        if sum == 0:
            start = i
        sum = sum + nums[i]
        if sum > max_sum:
            max_sum = sum
            ansStart = start
            ansEnd = i

        if sum <= 0:
            sum = 0
    print(max_sum)
    return nums[ansStart : ansEnd + 1]


def min_sub_array(nums: list):
    min_sum = sys.maxsize - 1
    sum = 0
    for i in range(len(nums)):
        sum = sum + nums[i]
        if min_sum > sum:
            min_sum = sum
    return min_sum


print(max_sum_sub_array([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
print(min_sub_array([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
print(max_sum_sub_array([1]))


def max_sum_with_equal_to_target(nums: list, target: int):
    n = len(nums)
    length = sys.maxsize - 1
    sum = 0
    start = 0

    for i in range(n):
        if sum == 0:
            start = i
        sum = sum + nums[i]
        print(sum)
        if sum >= target:
            tem_length = i - start
            print(i, start)
            length = min(length, tem_length)
            sum = 0

        if sum <= 0:
            sum = 0
    return length


print(max_sum_with_equal_to_target([-2, 1, -3, 4, -1, 2, 1, -5, 4, 6], 6))
