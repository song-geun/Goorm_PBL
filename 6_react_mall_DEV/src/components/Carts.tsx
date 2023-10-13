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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    cart.map((data: number) => {
                        return (
                            <div className="bg-white p-4 rounded-lg shadow-md">
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