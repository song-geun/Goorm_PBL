import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface tag {
    tag: string,
    id : any
}

const initialState: tag = {
    tag : "",
    id : "",
}

export const inputtag = createSlice({
    name : 'user',
    initialState,
    reducers :{
        settag : (state) =>{
            state.tag = "";
        },
        inputtags : (state, action : PayloadAction<string>) =>{
            state.tag = action.payload;
        },
    }
})

export const {settag, inputtags}  = inputtag.actions

export default inputtag.reducer