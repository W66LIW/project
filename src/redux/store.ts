import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authorizationData from "./loginSlice";
import { newsApi } from "../services/newsService";


const rootReduser = combineReducers({
    authorizationData,
    [newsApi.reducerPath]: newsApi.reducer
});

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


