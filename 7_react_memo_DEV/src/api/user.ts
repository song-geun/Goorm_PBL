import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface email{
    email : string,
    tags : string,
}

const initialState: email = {
    email : "",
    tags : "default"
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
    }
})

export const {setUser, settags}  = user.actions

export default user.reducer