import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../api/store'
import { inputtags, tag } from '../api/inputtag';
import { addtag } from '../api/fetchDB';
import { DeleteBox, FixedContainer } from './Modal/Modal.styles';
import { Box } from './Style/EditBox.styles';
import { Editswitch } from '../api/modal';

const Edit_Tag = () => {
    const dispatch = useDispatch<AppDispatch>();
    const tags = useSelector((state: RootState) =>
        state.fetch.tags)
    const tag = useSelector((state: RootState) => state.inputtag.tag)
    const handleChange = (e: any) => {
        dispatch(inputtags(e.target.value));
    };

    const handlesubmit = (e: any) => {
        e.preventDefault();
        const newtag: any = {
            tag: tag,
            id: crypto.randomUUID()
        }
        dispatch(addtag([...tags, newtag]));
    };
    const handletags = (e: any) => {
        dispatch(addtag(tags.filter((data) => data !== e)));
    }
    let type = "add";
    return (
        <FixedContainer>
            <Box>
                <div className="editTags__header">
                    <div className="editTags__tilte">
                        Edit Tags
                    </div>
                    <button className="editTags__close"
                        onClick={() => dispatch(Editswitch(false))}
                    >X</button>
                </div>
                <form onSubmit={handlesubmit}>
                    <input onChange={handleChange} value={tag} />
                </form>
                {
                    tags.map((data: tag) => {
                        return (
                            <div key={data.id}>
                                {data.tag}
                                {
                                    data.tag === "default" ? "" : <button onClick={(e) => handletags(data)}> X</button>
                                }
                            </div>
                        )
                    })
                }


            </Box>
        </FixedContainer>
    )
}
export default Edit_Tag;