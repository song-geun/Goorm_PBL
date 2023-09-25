package LinkedList;

public class stack_Main {
    public static void main(String[] args) {
        stack<Integer> list = new stack<Integer>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        while(!list.isempty())
            System.out.println(list.delete(1));
        list.add(3);
        list.add(4);
        list.add(5);
        while(!list.isempty())
            System.out.println(list.delete(1));
    }
}
