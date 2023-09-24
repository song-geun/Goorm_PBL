import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../api/store'
import { inputtags, tag } from '../api/inputtag';
import { addtag } from '../api/fetchDB';

const Edit_Tag = () => {
    const dispatch = useDispatch<AppDispatch>();
    const tags = useSelector((state: RootState) =>
        state.fetch.tags)
    const tag = useSelector((state : RootState) => state.inputtag.tag)
    const handleChange = (e: any) =>{
        dispatch(inputtags(e.target.value));
    };

    const handlesubmit = (e: any) => {
        const newtag : any = {
            tag : tag,
            id : crypto.randomUUID()
        }
        dispatch(addtag([...tags,newtag]));
    };
    
    return (
        <div>
            <div>
                <input onChange={handleChange} value={tag} />
                <button onClick={handlesubmit}>+</button>
            </div>
            {
                tags.map((data: tag) => {
                    return (
                        <div key={data.id}>
                            {data.tag}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Edit_Tag;