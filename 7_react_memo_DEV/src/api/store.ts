import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import fetchDB from "./fetchDB";
import user from "./user";
import input from './input';
import modal from './modal';

export const store = configureStore({
    reducer : {
        fetch : fetchDB,
        user : user,
        input : input,
        modal : modal
    },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;