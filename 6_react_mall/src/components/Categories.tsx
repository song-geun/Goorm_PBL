import { useEffect, useState } from "react";
import instance from "../api/axios";
import requests from "../api/listrequests";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../api/store";




const Categories: any = (( e : any) => {
    const fetchUrl = useSelector((state: RootState) => state.fetch.fetchUrl);
    const [Products, SetCategory] = useState([]);
    useEffect(() => {
        fetchData();
    }, [fetchUrl]);
    let cnt: number = 0;
    const fetchData = async () => {
        let request: any;
        if (fetchUrl === "")
            request = await instance.get(requests.fetchProduct);
        else
            request = await instance.get(fetchUrl);
        const result: any = [];
        request.data.forEach((element: any) => {
            result.push(element);
        });
        SetCategory(result);
    }

    return (

        <div className="flex justify-center">
            <div className="w-4/5 py-4 px-4 mx-10 grid grid-cols-5  place-content-center gap-5">
                {
                    Products.map((data: any) => {
                        return (
                            <Category data={data} />
                        )
                    })
                }
            </div>
        </div>

    );
}
);

export default Categories;