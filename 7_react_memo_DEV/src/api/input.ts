import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface input_info{
    inputid : string,
    inputpassword : string
}

const initialState: input_info = {
    inputid : "",
    inputpassword : ""
}

export const input = createSlice({
    name : 'user',
    initialState,
    reducers :{
        setinputid : (state, action : PayloadAction<string>) =>{
            state.inputid = action.payload;
        },
        setinputPassword : (state, action : PayloadAction<string> ) =>{
            state.inputpassword = action.payload;
        }
    }
})

export const {setinputid, setinputPassword}  = input.actions

export default input.reducer