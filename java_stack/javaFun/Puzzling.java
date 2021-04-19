package java_stack.javaFun;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class Puzzling {
    
    public static ArrayList<Integer> printSum(int[] numbers){
        int sum = 0;
        ArrayList<Integer> greaterThan10 = new ArrayList<Integer>();
        for (int number : numbers) {
            sum += number;
            if(number > 10){
                greaterThan10.add(number);
            }
        }
        System.out.println("Sum is " + sum);
        return greaterThan10;
    }
    public static ArrayList<String> shuffleNames(String[] names){
        ArrayList<String> longerThan5 = new ArrayList<String>();
        ArrayList<String> shuffledNames = new ArrayList<String>();
        for (String name : names) {
            shuffledNames.add(name);
        }
        Collections.shuffle(shuffledNames);
        for (String name : shuffledNames) {
            System.out.println(name);
            if(name.length() > 5){
                longerThan5.add(name);
            }
        }
        return longerThan5;
    }
    public static String shuffleAlphabet(String[] alphabet){
        ArrayList<String> shuffledAlphabet = new ArrayList<String>();
        ArrayList<String> vowels = new ArrayList<String>();
        vowels.add("a");
        vowels.add("e");
        vowels.add("i");
        vowels.add("o");
        vowels.add("u");
        for (String letter : alphabet) {
            shuffledAlphabet.add(letter);
        }
        Collections.shuffle(shuffledAlphabet);
        String lastLetter = shuffledAlphabet.get(shuffledAlphabet.size()-1);
        String firstLetter = shuffledAlphabet.get(0);
        String message = ") Not a Vowel";
        if (vowels.contains(firstLetter)){
            message = ") Is a Vowel";
        }
        return "Last Letter (" + lastLetter + "), First Letter (" + firstLetter + message ;
    }
    public static ArrayList<Integer> randomNums(){
        Random rand = new Random();
        // nextInt as provided by Random is exclusive of the top value so you need to add 1 
        ArrayList<Integer> randomNums = new ArrayList<Integer>();
        for (int i = 0; i < 10; i++) {
            randomNums.add(rand.nextInt((100 - 55) + 1) + 55);
        }
        return randomNums;
    }
    public static ArrayList<Integer> randomNumsSorted(){
        ArrayList<Integer> randomNums = randomNums();
        Collections.sort(randomNums);
        int min = randomNums.get(0);
        int max = randomNums.get(0);
        for (Integer num : randomNums) {
            if (num > max ) {
                max = num;
            } else if (num < min) {
                min = num;
            }
        }
        System.out.println("Max num is => " + max);
        System.out.println("Min num is => " + min);
        return randomNums;
    }
    public static String randomString(){
        String randomWord = "";
        String[] alphabet = { "a", "b", "c", "d", "e", "f", "g",
		"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z" };
        Random rand = new Random();
        for (int i = 0; i < 5; i++) {
            randomWord += alphabet[rand.nextInt(alphabet.length)];
        }
        return randomWord;
    }
    public static ArrayList<String> randomStringArr(){
        ArrayList<String> randomWords = new ArrayList<String>();
        for (int i = 0; i < 10; i++) {
            randomWords.add(randomString());
        }
        return randomWords;
    }
    public static void main(String[] args) {
        int[] numbers = {3,5,1,2,7,9,8,13,25,32};
        System.out.println(printSum(numbers));
        String[] names = {"Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"};
        System.out.println(shuffleNames(names));
        String[] alphabet = { "a", "b", "c", "d", "e", "f", "g",
		"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z" };
        System.out.println(shuffleAlphabet(alphabet));
        System.out.println(randomNums());
        System.out.println(randomNumsSorted());
        System.out.println(randomString());
        System.out.println(randomStringArr());
    }
}
