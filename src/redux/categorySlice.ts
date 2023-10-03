import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: "all",
    reducers: {
        changeCategory: (state: string, {payload}: PayloadAction<string>) => payload, 
    }

})

export const {changeCategory} = categorySlice.actions;
export default categorySlice.reducer;