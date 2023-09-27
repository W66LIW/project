import { ITodo } from '../types';
import done from '../svg/done.svg' ;
import inProgress from '../svg/inProgress.png';
import { useAppDispatch } from '../redux/hooks';
import { changeCompleted } from '../redux/allToDosSlice';

function ToDoItem({task}: { task: ITodo }) {
    const dispatch = useAppDispatch();
    let imgSrc = task.completed ? done : inProgress;
    let textDecoration = task.completed ? "line-through" : "none";
    let opacity = task.completed ? "0.4" : "1";
    return(
    <p key={task.id} className="Row">
        <img src={imgSrc} alt="completed" onDoubleClick={() => dispatch(changeCompleted(task.id))}/> 
        <span style={{textDecoration: textDecoration, opacity: opacity}}>{task.name}</span>
        </p>
    )
}

export default ToDoItem