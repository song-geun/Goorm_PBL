import { useSelector } from "react-redux";
import { RootState } from "../api/store";

const CartsItem : any = ((e : any) =>{
    const Products = useSelector((state: RootState) => state.fetch.items);
    const now : any = Products.filter((data:any)=> data.id === e.e);
    const item = now[0];
    return (
        <div>
            <img className="w-32 h-32 mx-auto mb-4" src={item.image}/>
            <h2 className="text-lg font-semibold truncate">{item.title}</h2>
            <span className="text-blue-500 font-semibold">{item.price}</span>
        </div>
    )
})

export default CartsItem;