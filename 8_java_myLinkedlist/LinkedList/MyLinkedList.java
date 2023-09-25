package LinkedList;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.function.Consumer;

public class MyLinkedList<T1> implements LinkedList<T1>, Iterable<T1> {

    private MyLinkedList<T1> prev = null;
    private MyLinkedList<T1> next = null;
    public T1 now = null;
    private boolean start = false;
    public int length = 0;
    @Override
    public void add(T1 now) {
        MyLinkedList<T1> newlinkedlist = new MyLinkedList<T1>();

        if(length != 0) {
            newlinkedlist.prev = this.prev;
            newlinkedlist.next = this;
            newlinkedlist.now = now;
            newlinkedlist.start = false;
            newlinkedlist.length = length;
            this.prev.next = newlinkedlist;
            this.prev = newlinkedlist;
            if(this.next == null)
                this.next = newlinkedlist;
        }
        else {
            this.now = now;
            this.prev = this;
            this.start = true;
        }
        length++;
    }

    @Override
    public T1 get(int index) {
        if(index >= length)
            return null;
        MyLinkedList<T1> now1 = new MyLinkedList<T1>();
            now1 = this;
        for(int i=1;i<index;i++)
            now1=now1.gonext();
        return now1.now;
    }

    @Override
    public T1 delete(int index) {
        if(index > length)
            return null;
        MyLinkedList<T1> now1 = new MyLinkedList<T1>();
        length--;
        now1.now = this.now;
        now1.next = this.next;
        now1.length = this.length;
        now1.start = this.start;
        now1.prev = this.prev;
        for(int i=0;i<index;i++)
            now1=now1.gonext();
        if(index == 0)
        {
            T1 result = this.now;
            this.now = now1.gonext().now;
            this.next = now1.gonext().next;
            this.start = true;
            this.prev.next = this;
            return result;
        }
        T1 result = now1.now;
        now1.goprev().next = now1.next;
        now1.gonext().prev = now1.prev;
        return result;
    }

    @Override
    public boolean isempty() {
        if(length == 0)
            return true;
        return false;
    }

    @Override
    public MyLinkedList<T1> goprev() {
        return this.prev;
    }

    @Override
    public MyLinkedList<T1> gonext() {
        return this.next;
    }


    @Override
    public Iterator<T1> iterator() {
        if(this.length == 0)
            return null;
        T1 arr[] = (T1[]) new Object[this.length];
        MyLinkedList<T1> now1 = new MyLinkedList<T1>();
        now1.now = this.now;
        now1.next = this.next;
        now1.length = this.length;
        now1.start = this.start;
        now1.prev = this.prev;
        arr[0] = now1.now;
        for(int i=1;i<this.length;i++)
        {
            now1=now1.gonext();
            arr[i] = now1.now;
        }
        Iterator<T1> ar = Arrays.stream(arr).iterator();
        return ar;
    }
}
