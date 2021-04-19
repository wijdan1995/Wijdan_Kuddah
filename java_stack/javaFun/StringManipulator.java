package java_stack.javaFun;

public class StringManipulator {
    public String trimAndConcat(String a, String b){
        return a.trim() + b.trim();
    }
    public int getIndexOrNull(String text, char letter){
        return text.indexOf(letter);
    }
    public int getIndexOrNull(String text, String sub){
        return text.indexOf(sub);
    }
    public String concatSubstring(String text1, int start, int end, String text2){
        return text1.substring(start,end) + text2;
    }
}
