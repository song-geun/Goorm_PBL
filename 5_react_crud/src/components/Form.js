import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
export default function Form({ handlesubmit, setName, setValue }) {


    const handleChange = (e) => {
        const id = e.target.id;
        if (id === "name")
            setName(e.target.value);
        else
            setValue(e.target.value);
    }

    return (

        <form>
            <div className="flex-col">
                <div className="flex justify-around px-3 py-2 mr-4">
                    <div>지출 항목</div>
                    <div>지출 비용</div>
                    
                </div>
                <div className="flex justify-around">
                
                <input className="w-50 pl-9 py-2  text-gray-500 border rounded shadow " type="text" id="name" onChange={handleChange} />
                <input className="w-50 pr-9 py-2  text-gray-500 border rounded shadow " type="number" id="value" onChange={handleChange} />
                </div>
                
                <div className="text-center py-2 my-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400" onClick={handlesubmit} >
                    
                    <input  type="submit" value="제출" /><FontAwesomeIcon icon={faPaperPlane}/>
                </div>
            </div>
        </form>
    )
}