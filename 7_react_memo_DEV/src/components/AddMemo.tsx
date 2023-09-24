import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../api/store';
import { setinputContents, setinputtitle } from '../api/input';
import { memos } from '../api/input';
import { randomUUID } from 'crypto';
import { addMemo } from '../api/fetchDB';

function AddMemo(setModalOpen: any) {
    const dispatch = useDispatch<AppDispatch>();
    const title = useSelector((state: RootState) => state.input.memotitle);
    const contents = useSelector((state: RootState) => state.input.context);
    const Piority = useSelector((state: RootState) => state.input.priority);
    const tag : any = useSelector((state: RootState) => state.input.tag);
    const Memos1 = useSelector((state : RootState) => state.fetch.memos);
    const tags = useSelector((state : RootState) =>
    state.fetch.tags)
    const handleChange = (e: any) => {
        if (e.target.id === "title")
            return dispatch(setinputtitle(e.target.value));
        else
            return dispatch(setinputContents(e.target.value));
    }
    const handlesubmit = (e: any) => {

        const newmemo: any = {
            id: crypto.randomUUID(),
            priority: Piority,
            tag: tag,
            memotitle: title,
            context: contents
        };
        dispatch(addMemo([...Memos1,newmemo]));
    };


    return (
        <div className="flex flex-col">
            <input className="border-red-400" id='title' type="text" onChange={handleChange} />
            <input id="contents" type='text' onChange={handleChange} />
            <div className="border-red-400 border:2">
                {
                    tags.map((data : any) =>{
                        return(
                        <button key={crypto.randomUUID()}>{data}</button>
                        )
                    })
                }
            </div>
            <button onClick={handlesubmit}>저장</button>
        </div>
    )
}

export default AddMemo;