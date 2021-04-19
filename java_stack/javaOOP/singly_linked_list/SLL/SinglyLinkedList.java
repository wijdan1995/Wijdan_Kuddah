package java_stack.javaOOP.singly_linked_list.SLL;

public class SinglyLinkedList {
    private SLLNode head;
    public SinglyLinkedList() {
        this.head = null;
    }
    private boolean IsEmpty() {
        return this.head == null;
    }
    public void AddFront(int value) {
        SLLNode newNode = new SLLNode(value);
        if(head == null) {
            head = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
    }
    public void AddBack(int value) {
        SLLNode newNode = new SLLNode(value);
        if(head == null) {
            head = newNode;
            return;
        }
        SLLNode runner = this.head;
        while(runner.next != null) {
            runner = runner.next;
        }
        runner.next = newNode;
    }
    public boolean Contains(int value) {
        SLLNode runner = this.head;
        while(runner != null) {
            if(runner.value == value)
                return true;
            runner = runner.next;
        }
        return false;

    }
    public void DisplayValues() {
        if(IsEmpty()) {
            System.out.println("List is empty");
            return;
        }

        SLLNode runner = this.head;
        while(runner.next != null) {
            System.out.println("$$$$$$$$$$$$$$$$");
            String s = String.format("Node Value: %s :: Nexint Value: %s", runner.value, runner.next.value);
            System.out.println(s);
            runner = runner.next;
        }
        System.out.println("$$$$$$$$$$$$$$$$");
        String s = String.format("Node Value: %s :: Nexint Value: null", runner.value);
        System.out.println(s);
    }

    public Integer removeBack() {
        SLLNode runner = head;
        int valToReturn;

        // if we have 0 nodes return null
        if(IsEmpty())
            return null;

        // if we have just one node, remove head
        if(head.next == null) {
            valToReturn = head.value;
            head = null;
            return valToReturn;
        }

        // otherwise, loop til we are right before the last node
        while(runner.next.next != null) {
            runner = runner.next;
        }
        valToReturn = runner.next.value;
        runner.next = null;
        return valToReturn;
        
    }
}
