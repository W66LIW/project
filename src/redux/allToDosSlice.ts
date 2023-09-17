import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ITodo } from "../types";

const allTodosSlice = createSlice({
    name: "allToDos",
    initialState: {
        arrOfTasks: [] as ITodo[],
        countOfActiveTasks: 0},
    reducers: {
        addTodo: (state, {payload}: PayloadAction<string>) => {
            state.arrOfTasks.push({name: payload,  id: Date.now().toString(), completed: false});
            state.countOfActiveTasks = state.countOfActiveTasks + 1;
            return; },
        changeCompleted: (state, {payload}: PayloadAction<string>) => {
            for(let i = 0; i < state.arrOfTasks.length; i++) {
                if(state.arrOfTasks[i].id === payload) {
                    state.arrOfTasks[i].completed = !state.arrOfTasks[i].completed;}}
            let newCount = 0;
            for(let i = 0; i < state.arrOfTasks.length; i++) {
                if(!state.arrOfTasks[i].completed){
                    newCount++; }}
            state.countOfActiveTasks = newCount;
            return; },
        clearCompleted: (state) => {
            let newArr = [];
            for(let i = 0; i < state.arrOfTasks.length; i++){
                if(!state.arrOfTasks[i].completed)
                newArr.push(state.arrOfTasks[i]);
            }
            state.arrOfTasks = newArr;
            return; }
                
        }
})

export default allTodosSlice.reducer;
export const { addTodo, changeCompleted, clearCompleted } = allTodosSlice.actions;