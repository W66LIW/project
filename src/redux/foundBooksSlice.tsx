import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IInitialState } from "../types";

const initState = {
    books: [],
    arrOfId: []
} as IInitialState;

const foundBooksSlice = createSlice({
    name: "foundBooks",
    initialState: initState,
    reducers: {
        addBooks: (state: IInitialState, {payload}: PayloadAction <any[]>) => {
            let arr = [];
            for(let i = 0; i < payload.length; i++) {
                if(!state.arrOfId.includes(payload[i].id)) {
                    state.arrOfId.push(payload[i].id)
                    arr.push(payload[i])
                }
            } 
            state.books = [...state.books, ...arr]
        }, 
        clearBooks: () => initState

    }
})

export const { addBooks, clearBooks } = foundBooksSlice.actions;
export default foundBooksSlice.reducer;