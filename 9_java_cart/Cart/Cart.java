package Cart;

import java.util.HashMap;

public class Cart implements Cartinterface
{
    private HashMap<Product,Integer> Items;

    public Cart()
    {
        Items = new HashMap<>();
    }
    @Override
    public void showItems() {
        Items.forEach((key, value) -> {
            System.out.println(key.getName() + " : " + value);
        });
    }

    @Override
    public void addProduct(Product o , int cnt) {
        try{
            int value = Items.get(o);
            value += cnt;
            Items.put(o, value);
        }
        catch (Exception e)
        {
            Items.put(o, cnt);
        }

    }

    @Override
    public void removeProduct(Product o, int cnt) {
        int value = Items.get(o);
        value -= cnt;
        if(value <= 0 )
            Items.remove(o);
        else
            Items.put(o,value);
    }
}
