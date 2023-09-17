import { useState } from "react";
import { addTodo, clearCompleted } from "../redux/allToDosSlice";
import { useAppDispatch, useTypedSelector } from "../redux/hooks";
import { change } from "../redux/showSlice";
import { changeToDoInput } from "../redux/todoInputSlice";
import ToDoItem from "./ToDoItem";

function ToDo() {
    const dispatch = useAppDispatch();
    const input = useTypedSelector((state) => state.toDoInput);
    const arrOfTodos = useTypedSelector((state) => state.allToDos.arrOfTasks);
    const activeTasks = useTypedSelector((state) => state.allToDos.countOfActiveTasks)
    const show = useTypedSelector((state) => state.show);
    
    console.log(arrOfTodos)
    return (
        <div className="ToDo">
            <h2>todos</h2>
            <div className="Rows">
                <div>
                    <input type="text" id="task"
                    value={input}
                    onChange={(e) => dispatch(changeToDoInput(e.target.value))}
                    onKeyDown={handleKeyDown}/>
                </div>
                        {show === "active" ? 
                        arrOfTodos.map((task) => task.completed ? null : <ToDoItem task={task}/>) : 
                        show === "completed" ?
                        arrOfTodos.map((task) => task.completed ? <ToDoItem task={task}/> : null) : 
                        arrOfTodos.map((task) => <ToDoItem task={task}/>)}
                    <div >
                        <h6>{activeTasks} items left</h6>
                        <button onClick={() => dispatch(change("all"))}>All</button>
                        <button onClick={() => dispatch(change("active"))}>Active</button>
                        <button onClick={() => dispatch(change("completed"))}>Completed</button>
                        <button onDoubleClick={() => dispatch(clearCompleted())}>Clear completed</button>
                    </div>
            </div>
        </div>
    )

    function handleKeyDown(e:any) {
        if(e.code === "Enter") {
            e.preventDefault();
            if(input){
                dispatch(addTodo(input));
            dispatch(changeToDoInput(""));
            }}}
}

export default ToDo;