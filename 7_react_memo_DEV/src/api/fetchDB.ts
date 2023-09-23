import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, DataSnapshot } from "firebase/database";


interface tag {
    tagname: string,
}
interface memos {
    id: string,
    priority: boolean,
    tagname: string,
    memoname: string,
    context: string
}
export interface memo {
    tags: tag[],
    memos: memos[],
}

const initialState: memo = {
    tags: [],
    memos: []
}

const fetchDBdata = () => {
    const firebaseConfig = {
        databaseURL: "https://learn-firebase-memo.firebaseio.com",
    }
    const db: any = getDatabase();
    const auth: any = getAuth();
    console.log(auth);
    const userId: any = auth.currentUser.uid;
    const userIdRef = ref(db, userId);
    return onValue(userIdRef, (DataSnapshot) =>{
        const data = DataSnapshot.val();
        return data;
    });
}

const updateDBdata = (state: memo) => {
    return state;
}


export const fetchDB = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        getMemo: (state) => {
            const now: any = fetchDBdata();
            state.memos = now.memos;
            state.tags = now.tags;
        },
        addMemo: (state, action: PayloadAction<memos>) => {
            state.memos.push(action.payload);
            updateDBdata(state);
        },
        deleteMemo: (state, action: PayloadAction<string>) => {
            const now = state.memos.filter((data) => data.id !== action.payload);
            state.memos = now;
            updateDBdata(state);
        }
        ,
        addtag: (state, action: PayloadAction<tag>) => {
            state.tags.push(action.payload);
            updateDBdata(state);
        },
        deletetag: (state, action: PayloadAction<string>) => {
            const now = state.tags.filter((data) => data.tagname !== action.payload)
            state.tags = now;
            updateDBdata(state);
        }
    }
})






export const { getMemo, addMemo, addtag, deleteMemo, deletetag } = fetchDB.actions

export default fetchDB.reducer