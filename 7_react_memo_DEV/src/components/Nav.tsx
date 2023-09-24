import React, { useEffect } from 'react'
import Edit_Tag from './Edit_Tag';
import Trash from './Trash';
import Archive from './Archive';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../api/store";
import Tags from './Tags';
import { randomUUID } from 'crypto';
import { settags } from '../api/user';
import { fetchDBdata } from '../api/fetchDB';
import { Editswitch } from '../api/modal';
import { tag } from '../api/inputtag';

const Nav = () => {
    const tags = useSelector((state: RootState) => state.fetch.tags);
    const userinfo = useSelector((state: RootState) => state.user);
    const Editon = useSelector((state: RootState) => state.modal.Editonoff);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (userinfo.email !== "")
            dispatch(fetchDBdata());
    }, [userinfo]);


    return (
        <div>
            Keep
            {
                (userinfo.email !== "" && tags.map((data: tag) => {
                    return (
                        <div key={data.id} onClick={() => { dispatch(settags(data.tag)) }}>
                            {data.tag}
                        </div>
                    )
                }))
            }

            {
                (userinfo.email !== "" &&
                    <div onClick={() => { dispatch(Editswitch(!Editon)) }}>
                        Edit_Tag
                    </div>)
            }
            {
                (Editon && <Edit_Tag />)
            }
        </div>

    )
}
{/* <Archive />
<Trash /> */}

export default Nav;