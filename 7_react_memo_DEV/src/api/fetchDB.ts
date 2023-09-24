import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, DataSnapshot, set, get, child } from "firebase/database";
import { memos } from "./input";



export interface memo1 {
    tags: string[],
    memos: [],
    isloading: boolean,
}

const initialState: memo1 = {
    tags: ["default"],
    memos: [],
    isloading: false,
}



const updateDBdata = (state: memo1) => {
    const db: any = getDatabase();
    const auth: any = getAuth();
    const userId: any = auth.currentUser.uid;
    set(ref(db, 'users/' + userId), {
        tags: state.tags,
        memos: state.memos
    }).then(() => {

    })
        .catch((error: any) => {
        });
}


export const fetchDB = createSlice({
    name: 'Product',
    initialState,
    reducers: {
        addMemo: (state, action: PayloadAction<any>) => {
            state.memos = action.payload;
            updateDBdata(state);
        },
        deleteMemo: (state, action: PayloadAction<string>) => {
            const now: any = state.memos.filter((data: any) => data.id !== action.payload);
            state.memos = now;
            updateDBdata(state);
        }
        ,
        addtag: (state, action: PayloadAction<any>) => {
            state.tags = action.payload;
            updateDBdata(state);
        },
        deletetag: (state, action: PayloadAction<string>) => {
            const now: any = state.tags.filter((data: any) => data !== action.payload)
            state.tags = now;
            updateDBdata(state);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDBdata.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchDBdata.fulfilled, (state, action: any) => {
                state.isloading = false;
                if (action.payload !== undefined)
                    state.memos = action.payload.memos;
                if (action.payload !== undefined)
                    state.tags = action.payload.tags;
            })
    }
})


export const fetchDBdata = createAsyncThunk(
    "/fetchData", async (thunkAPI: void) => {
        try {
            const db: any = getDatabase();
            const auth: any = getAuth();
            const userId: any = auth.currentUser.uid;
            const userIdRef = ref(db);
            const result = await get(child(userIdRef, `users/${userId}`));
            return result.val();
        }
        catch (e) {
            return "Error loading data";
        }
    }
)



export const { addMemo, addtag, deleteMemo, deletetag } = fetchDB.actions

export default fetchDB.reducer