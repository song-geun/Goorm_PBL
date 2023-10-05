package Cart;

import java.util.HashSet;
import java.util.Set;

public class CartApp {
    public static void main(String[] args) {
        Set<Product> productSet = new HashSet<>();

        productSet.add(new Product(1,"2",3L));
        productSet.add(new Product(2,"3",4L));

        for(Product product : productSet)
            System.out.println(product.getName() + " : " + product.getPrice());
        System.out.println();
        Cart myCart = new Cart();

        myCart.addProduct(new Product(1,"2",3L),4);
        myCart.addProduct(new Product(2,"3", 4L), 5);
        myCart.showItems();
        System.out.println();
        myCart.removeProduct(new Product(1,"2",3L), 5);
        myCart.showItems();
    }
}
