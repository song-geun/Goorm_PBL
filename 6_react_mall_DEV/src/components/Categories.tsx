import { useEffect } from "react";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../api/store";
import { fetchProducts } from "../api/fetchUrl";

const Categories: any = (( e : any) => {
    const fetchUrl = useSelector((state: RootState) => state.fetch.fetchUrl);
    const Display = useSelector((state : RootState) => state.fetch.display);
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, [fetchUrl]);
    return (

        <div className="flex justify-center">
            <div className="w-4/5 py-4 px-4 mx-10 grid grid-cols-5  place-content-center gap-5">
                {
                    Display.map((data: any) => {
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