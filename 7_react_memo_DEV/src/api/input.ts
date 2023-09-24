import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface memos {
    id: string,
    priority: boolean,
    tag: string,
    memotitle: string,
    context: string
}

const initialState: memos = {
    id: "",
    priority: false,
    tag: "",
    memotitle: "",
    context: "",
}

export const input = createSlice({
    name : 'user',
    initialState,
    reducers :{
        setUser : (state) =>{
            state.id = "";
            state.priority =  false;
            state.tag = "default";
            state.memotitle = "";
            state.context = "";
        },
        setinputtitle : (state, action : PayloadAction<string>) =>{
            state.memotitle = action.payload;
        },
        setinputContents : (state, action : PayloadAction<string> ) =>{
            state.context = action.payload;
        },
        setTag : (state , action : PayloadAction<string>) =>{
            state.tag = action.payload;
        },
        setPriority : (state, action : PayloadAction<boolean>) =>{
            state.priority = action.payload;
        }
    }
})

export const {setinputtitle, setinputContents, setTag, setUser, setPriority}  = input.actions

export default input.reducer