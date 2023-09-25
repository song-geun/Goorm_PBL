package LinkedList;

public class myLinked_List_main {
    public static void main(String[] args) {
        MyLinkedList<Integer> ll = new MyLinkedList<Integer>();
        ll.add(1);
        ll.add(2);
        ll.add(3);
        ll.delete(0);
        ll.add(4);
        for(int now : ll)
            System.out.println(now);
        ll.add(1);
        ll.add(2);
        ll.delete(0);
        ll.add(3);
        ll.add(4);
        for(int now : ll)
            System.out.println(now);
    }
}
