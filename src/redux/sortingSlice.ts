import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const sortingSlice = createSlice({
    name: "category",
    initialState: "relevance",
    reducers: {
        changeSorting: (state: string, {payload}: PayloadAction<string>) => payload, 
    }

})

export const {changeSorting} = sortingSlice.actions;
export default sortingSlice.reducer;