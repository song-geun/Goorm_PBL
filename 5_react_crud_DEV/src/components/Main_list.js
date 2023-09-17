import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons'
const Main_list = React.memo(({
    handleEditSubmit,id, title, val, handleClick
}) => {
    const name = "name"
    const value = "value"

    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedvalue, setEditedvalue] = useState(val);

    const handleEditChange = (event) => {
        let id = event.target.id;
        const [id1, id2] = id.split("-");
        if (id1 === "name")
            setEditedTitle(event.target.value);
        else
            setEditedvalue(event.target.value);
    }

    


    if (isEditing) {
        return (
            <div className="w-full px-4 py-2 my-2 text-gray-600 bg-gray-300 border rounded shadow">
                {
                    <form
                        onSubmit={handleEditSubmit}
                        className="flex items-center justify-between w-full px-4 py-2 my-2 text-gray-600 bg-gray-300 ">
                        <input
                            id={name + "-" + id}
                            value={editedTitle}
                            onChange={handleEditChange}
                            className="w-full px-3 py-2 mr-2 text-gray-400 rounded"
                        />
                        <input
                            id={value + "-" + id}
                            value={editedvalue}
                            onChange={handleEditChange}
                            className="w-full px-3 py-2 mr-2 text-gray-400 rounded"
                        />
                        <FontAwesomeIcon id = {id} icon={faPenToSquare} className="hover:text-blue-300" onClick={(e)=>handleEditSubmit(e,id,editedTitle, editedvalue, setIsEditing)} />
                        <FontAwesomeIcon icon={faX} className="hover:text-blue-300" onClick={() => handleClick()} />
                    </form>
                }
            </div>
        )
    }

    return (

        <div className="w-full px-4 py-2 my-2 text-gray-600 bg-blue-300 border rounded shadow">
            {
                <div className="flex items-center justify-between w-full px-4 py-2 my-2 text-gray-600 bg-blue-300 ">
                    <div>{title}</div>
                    <div>{val}</div>
                    <FontAwesomeIcon className="float-right hover:text-white" icon={faPenToSquare} onClick={() => setIsEditing(true)} />
                    <FontAwesomeIcon className="float-right hover:text-white" icon={faX} onClick={() => handleClick(id)} />
                </div>
            }
        </div>
    )
});

export default Main_list;