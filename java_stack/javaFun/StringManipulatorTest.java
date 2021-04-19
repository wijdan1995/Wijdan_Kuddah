package java_stack.javaFun;

public class StringManipulatorTest {
    public static void main(String[] args) {
        // String trimAndConcat(String, String)
        StringManipulator manipulator = new StringManipulator();
        String str = manipulator.trimAndConcat("    Hello     ","     World    ");
        System.out.println(str); // HelloWorld 

        // Integer getIndexOrNull(String, char)
        char letter = 'o';
        Integer a = manipulator.getIndexOrNull("Coding", letter);
        Integer b = manipulator.getIndexOrNull("Hello World", letter);
        Integer c = manipulator.getIndexOrNull("Hi", letter);
        System.out.println(a); // 1
        System.out.println(b); // 4
        System.out.println(c); // null
        
        // Integer getIndexOrNull(String, String)
        String word = "Hello";
        String subString = "llo";
        String notSubString = "world";
        a = manipulator.getIndexOrNull(word, subString);
        b = manipulator.getIndexOrNull(word, notSubString);
        System.out.println(a); // 2
        System.out.println(b); // null

        // String concatSubstring(String, int, int, String)
        word = manipulator.concatSubstring("Hello", 1, 2, "world");
        System.out.println(word); // eworld

    }
}
