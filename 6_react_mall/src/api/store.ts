import { configureStore } from "@reduxjs/toolkit";
import fetchUrl from "./fetchUrl";
import user from "./user";

export const store = configureStore({
    reducer : {
        fetch : fetchUrl,
        //uses : user
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;