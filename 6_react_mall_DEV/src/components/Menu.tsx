import Categories from "./Categories";
import requests from "../api/listrequests";
import React from 'react'
import type { RootState } from '../api/store'
import { useSelector, useDispatch } from 'react-redux'
import { setUrl} from '../api/fetchUrl'


const Menu: any = ((e: any) => {
    const fetchUrl = useSelector((state : RootState) => state.fetch.fetchUrl)
    const dispatch = useDispatch();
    
    return (
        <div>
            <div >

                <div className="w-screen flex justify-center px-4 py-4 mr-2 text-3xl">Products</div>
                <div className=" flex justify-center">
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{dispatch(setUrl(requests.fetchProduct))}}>
                        모두
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{dispatch(setUrl(requests.fetchelectronicscategory))}}>
                        전자기기
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{dispatch(setUrl(requests.fetchjewelerycategry))}}>
                        쥬얼리
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{dispatch(setUrl(requests.fetchmencategory))}}>
                        남성의류
                    </div>
                    <div className="  flex px-4 py-4 mr-2 bg-white border-gray-500 border-1 hover:bg-gray-600 hover:text-white shadow-lg font-semibold text-lg rounded-md" onClick={()=>{dispatch(setUrl(requests.fetchwomencategery))}}>
                        여성의류
                    </div>
                </div>
            </div>
            <Categories e={this}/>
        </div >
    )
}
);

export default Menu;