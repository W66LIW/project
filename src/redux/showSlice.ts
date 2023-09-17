import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
    name: "show",
    initialState: "all",
    reducers: {
        change: (state, {payload}: PayloadAction<string>) => payload }
})

export default showSlice.reducer;
export const { change } = showSlice.actions;