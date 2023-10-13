import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../api/store";
import CartsItem from "./CartsItem";
import { setCart } from "../api/fetchUrl";

const Carts: any = ((e: any) => {
    const cart = useSelector((state: RootState) => state.fetch.cart);
    const dispatch = useDispatch();

    const del = ((e: any) =>
    {
        dispatch(setCart( cart.filter((data : any) => data !== e)));
    });

    return (
        <div>
            <div>
                {
                    cart.map((data: number) => {
                        return (
                            <div>
                                <CartsItem e={data} />
                                <button onClick={()=>del(data)}>삭제</button>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
})

export default Carts;