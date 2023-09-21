import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../api/store";


const Items: any = ((e: any) => {
    const Products = useSelector((state: RootState) => state.fetch.items);
    const Item = useSelector((state: RootState) => state.fetch.item);

    const now = Products.filter((data: any) => data.id === Item);
    return (
        <div>
            {
                now.map((data: any) => {
                    console.log(data);
                    return (
                        <div>
                            <img src={data.image} />
                            <span>{data.title}</span>
                            <span>{data.category}</span>
                            <span>{data.description}</span>
                            <span>{data.price}</span>
                            <span>{data.rating.rate}</span>
                            <span>{data.rating.count}</span>
                        </div>
                    )
                })
            }
        </div >
    )
})

export default Items;
