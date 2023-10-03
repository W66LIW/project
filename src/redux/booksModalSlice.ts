import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModALInitialState } from "../types";

const initialState = {
   isActive: false,
   book: null
} as IModALInitialState;

 const booksModalSlice = createSlice({
    name: "booksModal",
    initialState: initialState,
    reducers: {
      toggle: (state: IModALInitialState, {payload}: PayloadAction <any>) => {
         if(state.isActive === false) {
            return {
               isActive: true,
               book: payload
            }
         } else {
            return initialState
         };
      },
    }
 })

 export const { toggle } = booksModalSlice.actions;
 export default booksModalSlice.reducer;