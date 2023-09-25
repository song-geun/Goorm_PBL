package LinkedList;

import java.util.Iterator;

public class stack<T1> implements LinkedList<T1>{
    private stack<T1> prev = null;
    private stack<T1> next = null;
    private T1 now = null;
    private int index;
    public int length=0;
    @Override
    public void add(T1 now) {
        stack<T1> newStack = new stack<T1>();
        if(now != null) {
            newStack.prev = this.prev;
            newStack.next = this.next;
            newStack.now = this.now;
            newStack.index = this.index;
            newStack.length = this.length;
            prev = newStack;
        }
        index = length;
        this.now = now;
        length++;
        if(prev != null)
            prev.next = this;
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
            this.now = goprev().get(0);
            goprev().next = null;
            this.prev = goprev().prev;
            length--;
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
    public stack<T1> goprev() {
        return prev;
    }

    @Override
    public stack<T1> gonext() {
        return null;
    }
}
