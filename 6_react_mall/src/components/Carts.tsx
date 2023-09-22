import { useSelector } from "react-redux";
import { RootState } from "../api/store";
import CartsItem from "./CartsItem";

const Carts : any = ((e : any) => {
    const cart = useSelector((state: RootState) => state.fetch.cart);
    return (
        <div>
            <div>
                {
                    cart.map((data: number) =>{
                        return (
                            <CartsItem e={data}/>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
})

export default Carts;