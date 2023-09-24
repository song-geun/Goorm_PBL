import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Modal1{
    onoff : boolean,
}

const initialState: Modal1 = {
    onoff : false,
}

export const modal = createSlice({
    name : 'user',
    initialState,
    reducers :{
        switching : (state, action: PayloadAction<boolean>) =>
        {
            state.onoff = action.payload;
        },
    }
})

export const {switching}  = modal.actions

export default modal.reducer