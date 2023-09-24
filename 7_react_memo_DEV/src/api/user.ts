import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface email{
    email : string,
    tags : string,
    priority : boolean,
    datesort : boolean,
}

const initialState: email = {
    email : "",
    tags : "default",
    priority : true,
    datesort : false,
}

export const user = createSlice({
    name : 'user',
    initialState,
    reducers :{
        setUser : (state, action: PayloadAction<string>) =>
        {
            state.email = action.payload;
        },
        settags : (state, action: PayloadAction<string>) =>{
            state.tags = action.payload;
        },
        setpriority : (state, action : PayloadAction<boolean>) =>{
            state.priority = action.payload;
        },
        setdatesort : (state, action : PayloadAction<boolean>) =>{
            state.datesort = action.payload;
        }
    }
})

export const {setUser, settags, setpriority, setdatesort}  = user.actions

export default user.reducer