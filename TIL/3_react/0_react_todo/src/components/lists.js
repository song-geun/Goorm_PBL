import React from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

export default function Lists({ todoData, setTodoData }) {

    const handleCompleChange = (id) => {
        let newTodoData = todoData.map((data) => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });
        //this.setState({todoData : newTodoData});
        setTodoData(newTodoData);
    }


    const handleClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id);
        setTodoData(newTodoData);
    }

    const handleEnd = (result) => {
        if (!result.destination) return;

        const newTodoData = todoData;

        const [reorderedItem] = newTodoData.splice(result.source.inex, 1);

        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
    }
    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="to-dos">
                    {(provided) => (
                        <div
                            {...provided.DroppableProps} ref={provided.innerRef}>
                            {
                                todoData.map((data, index) => (
                                    <Draggable
                                        key={data.id}
                                        draggableId={data.id.toString()}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div className=
                                                {`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded shadow`}>
                                                <div
                                                    key={data.id}
                                                    {...provided.DroppableProps}
                                                    ref={provided.innerRef}
                                                    {...provided.dragHandleProps}
                                                    className={
                                                        `${snapshot.inspDraggin ? "bg-gray-400" : "bg-gray-100"}`
                                                    }>
                                                    <div className="items-center">
                                                        <input
                                                            type="checkbox"
                                                            onChange={() => handleCompleChange(data.id)}
                                                            defaultcChecked={data.completed}
                                                        />{" "}
                                                        <span className={data.completed && "line-through"}>
                                                            {data.title}
                                                        </span>
                                                    </div>
                                                    <div className="items-center">
                                                        <button onClick={() => handleClick(data.id)}>
                                                            x
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div >
    )
}