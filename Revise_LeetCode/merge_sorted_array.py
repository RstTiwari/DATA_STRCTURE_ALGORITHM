def merge_sorted_array_naive(nums1: list[int], nums2: list[int], m: int,n: int) -> None:
    """
    Do not return anything, modify nums1 in-place instead.
    """
    left = 0
    right = 0
    index = 0
    ans = []

    while left < m and right < n:
        if nums1[left] <= nums2[right]:
            ans.append(nums1[left])
            left += 1
        else:
            ans.append(nums2[right])
            right += 1

    while left < m:
        ans.append(nums1[left])
        left += 1
        index += 1

    while right < n:
        ans.append(nums2[right])
        right += 1
        index += 1
    print(ans)
    for i in range(len(nums1)):
        nums1[i] = ans[i]
    return nums1

#time  O(4n) 
#space = O(n)

def swipe_value(nums1, nums2, left, right):
    nums1[left], nums2[right] = nums2[right], nums1[left]


def merge_sorted_array_optimal(nums1: list[int], nums2: list[int], m: int,n: int):
    left = m -1
    right = 0
    while left >=0 and right < n:
        if nums1[left] > nums2[right]:
            swipe_value(nums1,nums2,left,right)
            left -= 1
        else:
            right +=1
    nums1.sort()
    nums2.sort()
    for i in range(m,m+n):
        nums1[i] = nums2
    print(nums1,nums2)


if __name__ == "__main__":
     nums1 = [1,2,3,0,0,0]
     m = 3
     nums2 = [2,5,6]
     n = 3
     merged = merge_sorted_array_optimal(nums1,nums2,m,n)
     print(merged)
