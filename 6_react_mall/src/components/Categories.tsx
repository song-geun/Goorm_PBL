import { useEffect, useState } from "react";
import instance from "../api/axios";
import requests from "../api/listrequests";
import Category from "./Category";




const Categories: any = (({e, fetchUrl} : {e: any, fetchUrl : any}) => {
    let cate: any[] = [{ id: 1, title: 2, image: 3, price: 4 }];
    const [Products, SetCategory] = useState([]);
    useEffect(() => {
        fetchData();
    }, [fetchUrl]);
    let cnt:number = 0;
    const fetchData = async () => {
        const request: any = await instance.get(requests.fetchProduct);
        const result: any = [];
        console.log(request);
        request.data.forEach((element: any) => {
            result.push(element);
        });
        SetCategory(result);
    }

    return (
        <div className="flex-row w-screen">
            {
                Products.map((data: any) => {
                    return (
                        <div className="flex">
                            <Category data={data}/>
                        </div>
                    )
                })
            }
        </div>
    );
}
);

export default Categories;