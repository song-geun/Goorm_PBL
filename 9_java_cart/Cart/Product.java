package Cart;

import java.util.HashMap;
import java.util.Random;
import java.util.UUID;

public class Product extends HashMap implements Productinterface {

    private int key;
    private String name;
    private  Long Price;


    public Product(int key,String name, Long Price)
    {
        this.key = key;
        this.name = name;
        this.Price= Price;
    }

    @Override
    public final int hashCode()
    {
        return key;
    }

    @Override
    public final boolean equals(Object o)
    {
        if(this.hashCode() == o.hashCode())
            return true;
        return false;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public Long getPrice() {
        return Price;
    }


}
