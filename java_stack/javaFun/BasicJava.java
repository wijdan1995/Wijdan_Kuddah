package java_stack.javaFun;

import java.util.ArrayList;

public class BasicJava {
    public static void print1_255() {
        for (int i = 1; i <= 255; i++) {
            System.out.println(i);
        }
    }
    public static void printOdd1_255() {
        for (int i = 1; i <= 255; i++) {
            if(i % 2 != 0){
                System.out.println(i);
            }
        }
    }
    public static void printSum() {
        int sum = 0;
        for (int i = 0; i <= 255; i++) {
            sum += i;
            System.out.println("New number: " + i + " Sum: " + sum);
        }
    }
    public static void iteratingArray() {
        int[] arr = {1,3,5,7,9,13};
        for (int number : arr) {
            System.out.println(number);
        }
    }
    public static void findMax(int[] arr) {
        int max = arr[0];
        for (int number : arr) {
            if (number > max){
                max = number;
            }
        }
        System.out.println("Max is " + max);
    }
    public static void getAverage(int[] arr) {
        int sum = 0;
        for(int i =0; i < arr.length; i++){
            sum += arr[i];
        }
        System.out.println("Average is " + sum / arr.length);
    }
    public static void oddArray() {
        ArrayList<Integer> arr = new ArrayList<Integer>();

        for(int i =1; i <= 255; i++){
            if(i % 2 != 0){
                arr.add(i);
            }
        }
        System.out.println(arr);
    }
    public static void greaterY(int[] arr, int y) {
        int total = 0;
        for (int number : arr) {
            if (number > y){
                total += 1;
            }
        }
        System.out.println("Numbers Greater than Y => " + total);
    }
    public static void squareArr(int[] arr) {
        ArrayList<Integer> squaredArr = new ArrayList<Integer>();

        for (int number : arr) {
            squaredArr.add((number * number));
        }
        System.out.println("Squared arrary => " + squaredArr);
    }
    public static void eliminateNegatives(int[] arr) {
        ArrayList<Integer> noNegativeArr = new ArrayList<Integer>();

        for (int number : arr) {
            if(number > 0 ){
                noNegativeArr.add(number);
            } else {
                noNegativeArr.add(0);
            }
            
        }
        System.out.println("no negative arrary => " + noNegativeArr);
    }
    public static void maxMinAvg(int[] arr) {
        ArrayList<Object> maxMinAvg = new ArrayList<Object>();
        int min = arr[0];
        int max = arr[0];
        double sum = 0;
        for (int number : arr) {
            if(number > max ){
                max = number;
            } else if (number < min) {
                min = number;
            }
            sum += number;
        }
        double avg = sum / arr.length;
        maxMinAvg.add(min);
        maxMinAvg.add(max);
        maxMinAvg.add(avg);
        System.out.println("Min , Max , Avg => " + maxMinAvg);
    }
    public static void shiftByOne(int[] arr) {
        ArrayList<Integer> shiftedArr = new ArrayList<Integer>();
        int lastIndex = arr.length - 1;
        for (int i = 1; i < arr.length; i++) {
            if (i < lastIndex) {
                shiftedArr.add(arr[i]);
            } else {
                shiftedArr.add(0);
            }
        }
        System.out.println("Shifted Array by one => " + shiftedArr);
    }
    public static void main(String[] args) {
        print1_255();
        printOdd1_255();
        printSum();
        iteratingArray();
        findMax(new int[]{-3, -5, -7});
        getAverage(new int[]{2, 10, 3});
        oddArray();
        greaterY(new int[]{1, 3, 5, 7}, 3);
        squareArr(new int[]{1, 5, 10, -2});
        eliminateNegatives(new int[]{1, 5, 10, -2});
        maxMinAvg(new int[]{1, 5, 10, -2});
        shiftByOne(new int[]{1, 5, 10, -2});
    }
}
