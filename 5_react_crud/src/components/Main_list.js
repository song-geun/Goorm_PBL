import React from "react";

export default function Main_list({ listdata, handleedit }) {
    return (

        <div >
            {
                listdata.map((data) =>
                (
                    <div className="" key={data.id}>
                        <div>
                            <div>
                                <div >
                                    {data.title}
                                </div>
                                <div >
                                    {data.val}
                                </div>
                            </div>
                            <div >
                                <button>edit</button>
                                <button>x</button>
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </div>
    )
}