package algorithms.week11;
public class Day1 {
    // Balance Point
    // Given an array of numbers return true if there exists some point where the values on the left add up to equal the values on the right.
    public static Boolean balancePoint(int[] arr) {
        int index = 0;
        while (index < arr.length ) {
            int lSum = 0;
            int rSum = 0;
            for (int i = 0; i <= index; i++) {
                lSum += arr[i];
            }
            for (int j = index+1; j < arr.length; j++) {
                // console.log("j",j)
                rSum += arr[j];
            }

            if (lSum == rSum) {
                return true;
            } else {
                index++;
            }
        }
        return false;
    }
    // given [3, 2, 1, 5, 3, -2] return true
    // 3 + 2 + 1 = 5 + 3 - 2


    // Balance Index
    // Given an array of numbers return the index where the values on the left add up to equal the values on the right or -1 if there is no such point.
    public static int balanceIndex(int[] arr) {
        // your code here
        return -1;
    }
    // given [3, 2, 1, 5, 2, -2] return 2
    // 3 + 2 = 5 + 2 - 2
    public static void main(String[] args){
        // System.out.println("Hi");
        int [] arr = new int[]{3, 2, 1, 5, 3, -2};
        Boolean result = balancePoint(arr);
        System.out.println("There is balance point ? "+result);
    }
}


