import { useSelector } from "react-redux";
import { RootState } from "../api/store";

const CartsItem : any = ((e : any) =>{
    const Products = useSelector((state: RootState) => state.fetch.items);
    const now : any = Products.filter((data:any)=> data.id === e.e);
    const item = now[0];
    return (
        <div>
            <img src={item.image}/>
            {item.title}
            {item.price}
        </div>
    )
})

export default CartsItem;