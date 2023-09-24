import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Modal1{
    onoff : boolean,
    Editonoff : boolean
}

const initialState: Modal1 = {
    onoff : false,
    Editonoff : false,
}

export const modal = createSlice({
    name : 'user',
    initialState,
    reducers :{
        switching : (state, action: PayloadAction<boolean>) =>
        {
            state.onoff = action.payload;
        },
        Editswitch : (state , action : PayloadAction<boolean>)=>{
            state.Editonoff = action.payload;
        },
    }
})

export const {switching, Editswitch}  = modal.actions

export default modal.reducer