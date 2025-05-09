package BinarySearch;

import java.util.*;

public class BinarySearch {

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = {1, 2, 3, 4, 5, 8, 9};
        int target = 8;
        boolean ans = sol.findTheTarget(nums, target);
        System.out.println(ans);

    }

}

class Solution {

    public boolean findTheTarget(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        int mid = (start + end) / 2;

        while (start < nums.length) { // learn how to write the or as well as and in java
            if (nums[mid] > target) {
                end = mid - 1;
            } else if (nums[mid] < target) {
                start = mid + 1;
            }
            mid = (start + end) / 2;
        }

        return true;

    }

    public int middianOfTwoSortedArray(int[] nums1, int[] nums2) {
        List<Integer> twoSortedArray = new ArrayList<>();
        int count1 = 0;
        int count2 = 0;

        // now ge the both array at the in twoSortedArray
        while (count1 < nums1.length || count2 < nums2.length) {
            if (nums1[count1] <= nums2[count2]) {
                twoSortedArray.add(nums1[count1]);
                count1++;
            } else {
                twoSortedArray.add(nums2[count2]);
                count2++;
            }
        }
        // if anything left in array1
        while (count1 < nums1.length) {
            twoSortedArray.add(nums1[count1]);
            count1++;
        }
        // if anything left in array2
        while (count2 < nums2.length) {
            twoSortedArray.add(nums2[count2]);

        }

        int size = twoSortedArray.size();
        int medianPoint = size / 2;
        int medianValue = twoSortedArray.get(medianPoint);
        return medianValue;

    }
}
