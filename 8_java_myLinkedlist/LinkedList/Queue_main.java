package LinkedList;

public class Queue_main {
    public static void main(String[] args) {
        Queue<Integer> q1 = new Queue<Integer>();
        q1.add(1);
        q1.add(2);
        q1.add(3);
        q1.add(4);
        while(!q1.isempty())
        {
            System.out.println(q1.delete(0));
        }
        q1.add(5);
        q1.add(6);
        q1.add(7);
        while(!q1.isempty())
        {
            System.out.println(q1.delete(0));
        }
    }
}
