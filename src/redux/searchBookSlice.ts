import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const searchBookSlice = createSlice({
    name: "searchBook",
    initialState: "",
    reducers: {
        changeSearch: (state: string, {payload}: PayloadAction<string>) => payload 
    }
})

export const { changeSearch } = searchBookSlice.actions;
export default searchBookSlice.reducer;