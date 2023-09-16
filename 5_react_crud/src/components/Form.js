import React from "react";

export default function Form({ handlesubmit, setName, setValue }) {


    const handleChange = (e) => {
        const id = e.target.id;
        if (id === "name")
            setName(e.target.value);
        else
            setValue(e.target.value);
    }

    return (

        <form onSubmit={handlesubmit}>
            <div className="flex-col">
                <div className="flex justify-around px-3 py-2 mr-4">
                    <div>지출 항목</div>
                    <div>지출 비용</div>
                    
                </div>
                <div className="flex justify-around">
                
                <input className="w-50 px-3 py-2  text-gray-500 border rounded shadow " type="text" id="name" onChange={handleChange} />
                <input className="w-50 px-3 py-2  text-gray-500 border rounded shadow " type="number" id="value" onChange={handleChange} />
                </div>
                
                <div className="py-2" >
                    <input className="p2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400" type="submit" value="제출" />
                </div>
            </div>
        </form>
    )
}