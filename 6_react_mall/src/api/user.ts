import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface user_info{
    id : string,
    email : string,
    token : string,
    password : string,
    inputid : string,
    inputpassword : string
}

const initialState: user_info = {
    id : "",
    email : "",
    token : "",
    password : "",
    inputid : "",
    inputpassword : ""
}

export const user = createSlice({
    name : 'user',
    initialState,
    reducers :{
        setUser : (state, action: PayloadAction<user_info>) =>
        {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.password = action.payload.password;
        },
        setinputid : (state, action : PayloadAction<string>) =>{
            state.inputid = action.payload;
        },
        setinputPassword : (state, action : PayloadAction<string> ) =>{
            state.inputpassword = action.payload;
        }
    }
})

export const {setUser, setinputid, setinputPassword}  = user.actions

export default user.reducer