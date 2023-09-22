import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface user_info{
    id : string,
    email : string,
    token : string
}

const initialState: user_info = {
    id : "",
    email : "",
    token : ""
}

const user : any = createSlice({
    name : 'user',
    initialState,
    reducers :{
        setUser : (state, action: PayloadAction<user_info>) =>
        {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.token = action.payload.token;
        }
    }
})


export default user;