//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.lang.*;
import java.util.*;

class Geeks {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        for (int g = 0; g < t; g++) {
            String[] str = (br.readLine()).trim().split(" ");
            int arr[] = new int[str.length];
            for (int i = 0; i < str.length; i++) arr[i] = Integer.parseInt(str[i]);
            System.out.println(new Solution().majorityElement(arr));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    static int majorityElement(int arr[]) {
        int count = 0;
        int element = -1;
        for(int num : arr){
            if(count == 0){
                element = num;
                count++;
            }
            else if(num == element){
                count++;
            }
            else{
                count--;
            }
        }
        int count1 = 0;
        for(int num : arr){
            if(element == num){
                count1++;
            }
        }
        return count1 > arr.length / 2 ? element : -1;
    }
}