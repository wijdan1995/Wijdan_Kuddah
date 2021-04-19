package java_stack.javaOOP.singly_linked_list.SLL;

public class SLLTester {
    public static void main(String[] args) {
        SinglyLinkedList sll = new SinglyLinkedList();

        sll.AddBack(1);
        sll.AddBack(2);
        sll.AddBack(3);
        sll.AddBack(4);

        int val = sll.removeBack();
        System.out.println(val);
    }
}
