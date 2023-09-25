package LinkedList;

public class Queue<T1> implements LinkedList<T1>{
    private Queue<T1> prev = null;
    private Queue<T1> next = null;
    private T1 now = null;
    int length = 0;

    @Override
    public void add(T1 now) {
        Queue<T1> newqueue = new Queue<T1>();

        if(length != 0) {
            newqueue.prev = this.prev;
            newqueue.next = this;
            newqueue.now = now;
            newqueue.length = length;
            this.prev.next = newqueue;
            this.prev = newqueue;
            if(this.next == null)
                this.next = newqueue;
        }
        else {
            this.now = now;
            this.prev = this;
        }
        length++;
    }

    @Override
    public T1 get(int now) {
        return this.now;
    }

    @Override
    public T1 delete(int index) {
        T1 result = this.now;
        if(this.now != null)
        {
            this.now = this.gonext().get(0);
            length--;
            this.next = this.gonext().gonext();

        }
        return result;
    }

    @Override
    public boolean isempty() {
        if(length == 0)
            return true;
        return false;
    }

    @Override
    public Queue<T1> goprev() {
        return prev;
    }

    @Override
    public Queue<T1> gonext() {
        return next;
    }
}
