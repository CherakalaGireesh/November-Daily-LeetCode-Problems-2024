//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int tc = Integer.parseInt(br.readLine());

        while (tc-- > 0) {
            String s[] = br.readLine().split(" ");
            int arr[] = new int[s.length];

            for (int i = 0; i < arr.length; i++) {
                arr[i] = Integer.parseInt(s[i]);
            }
            int m = Integer.parseInt(br.readLine());

            Solution obj = new Solution();
            System.out.println(obj.subarrayXor(arr, m));
            System.out.println("~");
        }
    }
}
// } Driver Code Ends


class Solution {
    public long subarrayXor(int arr[], int m) {
        long count = 0;
        int xor = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        for ( int i = 0; i < arr.length; i++) {
            xor ^= arr[i];
            int x = xor ^ m;
            if(map.containsKey(x))
                count += map.get(x);
            map.put(xor, map.getOrDefault(xor, 0) + 1);
        }
        return count;
    }
}