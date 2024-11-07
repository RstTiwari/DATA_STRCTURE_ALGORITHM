class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        merged_array = []
        i = 0
        j = 0
        while i < len(nums1) and j < len(nums2) :
            if nums1[1] < nums2[j] :
                merged_array.append(nums1[i])
                i +=1 
            else:
                merged_array.append(nums2[j])
                j += 1
        print(merged_array,"===")


        