import React, { useEffect } from 'react'
import Edit_Tag from './Edit_Tag';
import Trash from './Trash';
import Archive from './Archive';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../api/store";
import { getMemo } from '../api/fetchDB';

const Nav = () => {
    const fetchDB = useSelector((state : RootState) => state.fetch);
    const userinfo = useSelector((state : RootState) => state.user);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        if(userinfo.email !== "")
            dispatch(getMemo());
    },[userinfo])
    return (
        <div>
            일단 로그
            <div>asdfasdfsdf</div>
            {

            }
            <Edit_Tag />
            <Archive />
            <Trash />
        </div>
    )
}


export default Nav;