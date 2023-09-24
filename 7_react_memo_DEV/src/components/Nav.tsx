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

const Nav = () => {
    const tags = useSelector((state : RootState) => state.fetch.tags);
    const userinfo = useSelector((state : RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        if(userinfo.email !== "")
            dispatch(fetchDBdata());
    },[userinfo])
    return (
        <div>
            일단 로그
            {
                tags.map((data : any) => {
                    return (
                        <div key={crypto.randomUUID()} onClick={()=>{dispatch(settags(data))}}>
                            {data}
                        </div>
                    )
                })
            }
            <Edit_Tag />
            <Archive />
            <Trash />
        </div>
    )
}


export default Nav;