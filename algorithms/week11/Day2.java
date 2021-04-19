package algorithms.week11;
import java.lang.Math;

public class Day2 {
    public static boolean binarySearch( int[] arr, int val ){
        int start = 0;
        int end = arr.length - 1 ;
        int mid = (int) Math.floor(( start + end ) / 2);
        while ( arr[mid] != val && start <= end) {
            if ( val < arr[mid] ) {
                // to have only left side
                end = mid - 1 ;
            } else {
                // to have only right side
                start = mid + 1 ;
            }
            // get the mid again
            mid = (int) Math.floor(( start + end ) / 2);
        }
        return arr[mid] == val;
    }
    public static void main(String[] args) {
        System.out.println(binarySearch(new int[]{1,2,3,4,5,6,70,80,90,100}, 7));
    }
}