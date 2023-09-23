import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface user_info{
    id : string,
    password : string,
    token : string,
}

const initialState: user_info = {
    id : "",
    password : "",
    token : "",
}

export const user = createSlice({
    name : 'user',
    initialState,
    reducers :{
        setUser : (state, action: PayloadAction<user_info>) =>
        {
            state.id = action.payload.id;
            state.password = action.payload.password;
        },
    }
})

export const {setUser}  = user.actions

export default user.reducer