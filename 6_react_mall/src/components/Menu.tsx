import Categories from "./Categories";
import requests from "../api/listrequests";
import { useState } from "react";

const Menu: any = ((e: object) => {
    const [fetchUrl, SetFetchUrl] = useState("");
    return (
        <div>
            <div >

                <div className="w-screen flex justify-center px-4 py-4 mr-2 text-3xl">Products</div>
                <div className=" flex justify-center">
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{SetFetchUrl(requests.fetchProduct)}}>
                        모두
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{SetFetchUrl(requests.fetchelectronicscategory)}}>
                        전자기기
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{SetFetchUrl(requests.fetchjewelerycategry)}}>
                        쥬얼리
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{SetFetchUrl(requests.fetchmencategory)}}>
                        남성의류
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{SetFetchUrl(requests.fetchwomencategery)}}>
                        여성의류
                    </div>
                </div>
            </div>
            <Categories fetchUrl={fetchUrl}/>
        </div >
    )
}
);

export default Menu;