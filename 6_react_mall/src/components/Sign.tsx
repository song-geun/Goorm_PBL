import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AppDispatch, RootState} from '../api/store'
import {setinputPassword, setinputid} from "../api/user"
const Sign = (e: any) => {
    useSelector((state : RootState) => state.User.inputid);
    const dispatch = useDispatch<AppDispatch>();
    const inputid = useSelector((state : RootState) => state.User.inputid);
    const inputpassword = useSelector((state : RootState) => state.User.inputpassword);
    const handleChange = (e : any) =>{
        if(e.target.id === 'id')
            dispatch(setinputid(e.target.value));
        else
            dispatch(setinputPassword(e.target.value));
    }


    const handleLog = (e : any) =>{

    }

    const handleSumit = (e : any) =>{

    }
    return (
        <form>
            <input className="" id="id" value={inputid} onChange={handleChange}/>
            <input id="password" value={inputpassword} onChange={handleChange}/>
            <button onClick={handleSumit}/>
            <button onClick={handleLog} />
        </form>
    )
}

export default Sign;