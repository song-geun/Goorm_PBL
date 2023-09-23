import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import requests from "./listrequests";
import axios from "axios";
import instance from "./axios";

export interface arrayState {
    fetchUrl: string,
    cart: [],
    items: [],
    display: any,
    item: string,
    error: string,
    isLoading: boolean,
}

const initialState: arrayState = {
    fetchUrl: requests.fetchProduct,
    cart: [],
    items: [],
    item: "",
    error: "",
    isLoading: false,
    display: [],
}






export const fetchUrl = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        setUrl: (state, action: PayloadAction<string>) => {
            state.fetchUrl = action.payload
        },
        setCart: (state, action: PayloadAction<any>) => {
            state.cart = action.payload
        },
        setItem: (state, action: PayloadAction<string>) => {
            state.item = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                if (state.fetchUrl === requests.fetchProduct)
                    state.display = state.items;
                else
                    state.display = state.items.filter((data: any) => (data.category === state.fetchUrl))
            })
            .addCase(fetchProducts.rejected, (state, action: any) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts", async (thunkAPI : void) => {
        try {
            const response = await instance.get(requests.fetchProduct);
            return response.data;
        }
        catch (e) {

            return "Error loading products";
        }
    }
)

export const { setUrl, setCart, setItem } = fetchUrl.actions

export default fetchUrl.reducer