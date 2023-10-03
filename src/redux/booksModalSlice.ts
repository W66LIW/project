import { createSlice } from "@reduxjs/toolkit";

 const booksModalSlice = createSlice({
    name: "booksModal",
    initialState: false,
    reducers: {
      toggle: (state: boolean) => !state,
    }
 })

 export const { toggle } = booksModalSlice.actions;
 export default booksModalSlice.reducer;