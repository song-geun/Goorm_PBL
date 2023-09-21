import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import requests from "./listrequests";

export interface arrayState {
    fetchUrl: string,
}

const initialState: arrayState = {
    fetchUrl: requests.fetchProduct,
}

export const fetchUrl = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        setUrl : (state, action: PayloadAction<string>) => {
            state.fetchUrl = action.payload
        },
    },
})

export const {setUrl} = fetchUrl.actions

export default fetchUrl.reducer