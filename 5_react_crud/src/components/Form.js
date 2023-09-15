import React from "react";

export default function Form({handlesubmit, setName, setValue}) {


    const handleChange = (e) => {
        const id = e.target.id;
        if (id === "name")
            setName(e.target.value);

        else
            setValue(e.target.value );
    }

    return (

        <form onSubmit={handlesubmit}>
            <div >
                <div>지출 항목</div>
                <input type="text" id="name" onChange={handleChange} />
                <div >
                    <input type="submit" value="제출"  />
                </div>
            </div>
            <div >
                <div>지출 비용</div>
                <input  type="number" id="value" onChange={handleChange} />
            </div>

        </form>
    )
}