package LinkedList;

public interface LinkedList<T1>{

    public void add(T1 now);
    public T1 get(int now);
    public T1 delete(int index);
    public boolean isempty();
    public LinkedList<T1> goprev();
    public LinkedList<T1> gonext();
}
