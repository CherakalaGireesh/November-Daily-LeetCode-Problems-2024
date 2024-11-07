//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GfG {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; ++i) arr[i] = sc.nextInt();

            System.out.println(new Sol().search(n, arr));
        
System.out.println("~");
}
    }
}
// } Driver Code Ends


// User function Template for Java

class Sol {
    public static int search(int n, int arr[]) {
        Map<Integer, Integer> freq = new HashMap<>();
        
        for (int num : arr){
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        
        for(int num : freq.keySet()){
            if(freq.get(num) == 1)
                return num;
        }
        
        return -1;
    }
}