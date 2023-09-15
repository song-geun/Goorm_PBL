import React from "react";

export default function Main_list({listdata}) {
    return (

        <div >
            {
                listdata.map((data) =>
                (
                    <div className="lists" key={data.id}>
                        <div >
                            {data.title}
                        </div>
                        <div >
                            {data.value}
                        </div>
                        <div >

                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}