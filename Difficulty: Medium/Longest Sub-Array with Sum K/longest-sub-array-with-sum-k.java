//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader read = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(read.readLine().trim()); // Read number of test cases

        while (t-- > 0) {
            String line = read.readLine().trim(); // Read the array input
            String[] numsStr = line.split(" ");   // Split the input string by spaces
            int[] nums =
                new int[numsStr.length]; // Convert string array to integer array
            for (int i = 0; i < numsStr.length; i++) {
                nums[i] = Integer.parseInt(numsStr[i]);
            }

            int k = Integer.parseInt(read.readLine().trim()); // Read target sum

            Solution ob = new Solution();
            int ans =
                ob.lenOfLongestSubarr(nums, k); // Call the function and store result
            System.out.println(ans);
            System.out.println("~");
        }
    }
}

// } Driver Code Ends


// User function Template for Java

class Solution {
    public int lenOfLongestSubarr(int[] arr, int l) {
        int length = arr.length;
        int maxLength = 0;
        int prefixSum = 0;
        HashMap<Integer, Integer> prefixSumMap = new HashMap<>();
        for (int i = 0; i < length; i++){
            prefixSum += arr[i];
            if(prefixSum == l){
                maxLength = i + 1;
            }
            int rem = prefixSum - l;
            if(prefixSumMap.containsKey(rem)){
                maxLength = Math.max(maxLength, i - prefixSumMap.get(rem));
            }
            prefixSumMap.putIfAbsent(prefixSum, i);
        }
        return maxLength;
    }
}
