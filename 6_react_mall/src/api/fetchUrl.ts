import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import requests from "./listrequests";

export interface arrayState {
    fetchUrl: string,
    cart : [],
    items : [],
    item : string
}

const initialState: arrayState = {
    fetchUrl: requests.fetchProduct,
    cart : [],
    items : [],
    item : ""
}

export const fetchUrl = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        setUrl : (state, action: PayloadAction<string>) => {
            state.fetchUrl = action.payload
        },
        setCart : (state, action: PayloadAction<any>) =>{
            state.cart = action.payload
        },
        setItem : (state, action: PayloadAction<string>) =>{
            state.item = action.payload
        },
        setItems : (state, action: PayloadAction<any>) =>{
            state.items = action.payload
        },
    },
})

export const {setUrl, setCart, setItem, setItems} = fetchUrl.actions

export default fetchUrl.reducer