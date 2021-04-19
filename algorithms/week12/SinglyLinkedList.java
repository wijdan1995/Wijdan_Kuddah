public class SinglyLinkedList {
    public Node head;
    public SinglyLinkedList() {
        this.head = null;
    }
    // SLL methods go here. As a starter, we will show you how to add a node to the list.
    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }
    public void remove() {
        if(head == null) {
            System.out.println("There is no Node");
        } else if ( head.next == null ){
            head = null;
        } else {
            Node runner = head;
            while(runner.next.next != null) {
                runner = runner.next;
            }
            runner.next = null;
        }
        
    }
    public void printValues() {
        if(head == null) {
            System.out.println("There is no Node");
        } else {
            Node runner = head;
            while(runner != null) {
                System.out.print(runner.value + " ");
                runner = runner.next;
            }
        }
        System.out.println();
    }

    public void reverse() {
        if(head == null) {
            System.out.println("There is no Node");
        } else {
            Node prev = null;
            Node runner = head;
            Node next = null;
            while(runner != null) {
                // 1  2  3  4 
                next = runner.next; // 2 
                // point to the prev one to reverse it
                runner.next = prev; // null
                prev = runner; // 1
                runner = next; // 2
            }
            head = prev;
        }
    }
}
