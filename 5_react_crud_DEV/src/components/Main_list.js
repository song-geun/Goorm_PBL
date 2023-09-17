import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons'
const Main_list = React.memo(({
    id, title, val, handleClick, handleedit
}) => {
    const name = "name"
    const value = "value"
    return (

        <div >
            {
                <div className="flex items-center justify-between w-full px-4 py-2 my-2 text-gray-600 bg-blue-300 border rounded shadow">

                    <input
                        className="w-full px-2 py-2 mr-4 text-gray-500 border rounded shadow "
                        id={name + id}
                        placeholder={title}
                    />
                    <input
                        className="w-full px-2 py-2 mr-4 text-gray-500 border rounded shadow "
                        id={value + id}
                        placeholder={val}
                    />
                    <div className="w-20 mr-4 float-right">
                        <FontAwesomeIcon icon={faPenToSquare} onClick={(e) => handleedit(e, id)} />
                        <FontAwesomeIcon icon={faX} onClick={() => handleClick(id)} />
                    </div>
                </div>
            }
        </div>
    )
});

export default Main_list;