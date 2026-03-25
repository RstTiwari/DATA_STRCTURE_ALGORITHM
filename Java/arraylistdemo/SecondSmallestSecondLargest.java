package ArrayList;
import java.util.*;

public class SecondSmallestSecondLargest {
    public static void main(String[] args){
        int[] nums = {5, 3, 1, 4, 2};
        Solution mySol = new Solution();
        int [] sol1 = mySol.bruteForce(nums);
        System.out.println(sol1);

    }
    
}

class Solution{
   public int [] bruteForce(int[] nums){
    // this only works when there is not duplicated value int the array
     Arrays.sort(nums);
     return new int[] { nums[1], nums[nums.length - 2] };

   }

//    public int [] better(int []  nums){

//    }

//    public int [] optimal (int [] nums){

//    }
}
