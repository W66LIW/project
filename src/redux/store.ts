import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authorizationData from "./loginSlice";


const rootReduser = combineReducers({
    authorizationData,
});

export const store = configureStore({
    reducer: rootReduser,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

