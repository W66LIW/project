import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const booksInputSlice = createSlice({
    name: "booksInput",
    initialState: "",
    reducers: {
        change: (stare: string, {payload}: PayloadAction<string>) => payload,
    }
})

export const {change} = booksInputSlice.actions;
export default booksInputSlice.reducer;