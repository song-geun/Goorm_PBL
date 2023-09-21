import { configureStore } from "@reduxjs/toolkit";
import fetchUrl from "./fetchUrl";

export const store = configureStore({
    reducer : {
        fetch : fetchUrl
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;