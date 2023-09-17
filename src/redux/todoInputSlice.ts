import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const todoInputSlice = createSlice({
    name: "todoInput",
    initialState: "",
    reducers: {
        changeToDoInput: (state:string, {payload}:PayloadAction<string>) => payload,
    }
})

export default todoInputSlice.reducer;
export const {changeToDoInput} = todoInputSlice.actions;