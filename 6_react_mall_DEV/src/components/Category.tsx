import { Navigate, useNavigate } from "react-router-dom";
import Cart from "./Carts";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "../api/store";
import { setCart, setItem } from "../api/fetchUrl";


let cnt: number = 0
const Category: any = ((data: any) => {
    const fetchUrl = useSelector((state: RootState) => state.fetch.fetchUrl);
    const cart = useSelector((state: RootState) => state.fetch.cart);
    const dispatch = useDispatch();
    let navigate = useNavigate();   
    let product : boolean = cart.filter((now : any)=> now === data).length == 0 ? false : true;
    const AddCart = ((id : any)=>
    {
        dispatch(setCart([...cart.filter((id1 : any) => id1 !== id),id]));
    })
    return (
        <div className="flex flex-col px-5 w-20% h-72 justify-center border border-gray-500" key={data.data.id} >
            <div className="flex flex-col justify-center m-5" onClick={() => {navigate('../Items'); dispatch(setItem(data.data.id))}}>
                <img className="flex w-48 h-48 object-fill" src={data.data.image} />
                <p className="flex truncate">{data.data.title}</p>
            </div>
            <div className="flex flex-row justify-between">
                <button disabled = {product} onClick={() => {AddCart(data.data.id)}}>{product ? "장바구니에 담긴 제품" : "장바구니 담기"
                }</button> 
                <p className="turncate">$  {data.data.price}</p>
            </div>
        </div>
    )
}
);


//handleonClick()
//

export default Category;
