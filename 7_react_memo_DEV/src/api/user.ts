import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface email{
    email : string,
}

const initialState: email = {
    email : "",
}

export const user = createSlice({
    name : 'user',
    initialState,
    reducers :{
        setUser : (state, action: PayloadAction<string>) =>
        {
            state.email = action.payload;
        },
    }
})

export const {setUser}  = user.actions

export default user.reducer