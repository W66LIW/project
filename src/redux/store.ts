import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authorizationData from "./loginSlice";
import toDoInput from "./todoInputSlice";
import allToDos from "./allToDosSlice";
import show from "./showSlice";
import booksInput from "./booksInputSlice";
import searchBook from "./searchBookSlice";
import { newsApi } from "../services/newsService";
import { booksApi } from "../services/booksService";


const rootReduser = combineReducers({
    authorizationData,
    toDoInput,
    allToDos,
    show,
    booksInput,
    searchBook,
    [newsApi.reducerPath]: newsApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer
});

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([newsApi.middleware, booksApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


