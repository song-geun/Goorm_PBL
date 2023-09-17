import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare, faX} from '@fortawesome/free-solid-svg-icons'
export default function Main_list({ listdata, handleedit, setListData }) {

    const handleClick = (id) => {
        
        let listdata1 = listdata.filter((data) => data.id !== id);
        setListData(listdata1);
    }
    
    const name = "name"
    const value = "value"
    return (

        <div >
            {
                listdata.map((data) =>
                (
                    <div className="flex items-center" key={data.id}>
                        <div className="flex items-center justify-between w-full px-4 py-2 my-2 text-gray-600 bg-blue-300 border rounded shadow">

                            <input
                                className="w-full px-2 py-2 mr-4 text-gray-500 border rounded shadow "
                                id={name + data.id}
                                placeholder={data.title}
                            />
                            <input
                                className="w-full px-2 py-2 mr-4 text-gray-500 border rounded shadow "
                                id={value + data.id}
                                placeholder={data.val}
                            />
                            <div className="w-20 mr-4 float-right">
                                <FontAwesomeIcon icon={faPenToSquare} onClick={(e) => handleedit(e,data.id)} />
                                <FontAwesomeIcon icon={faX} onClick={() => handleClick(data.id)} />
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}