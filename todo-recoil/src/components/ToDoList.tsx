
import {  useRecoilValue} from 'recoil';
import {  toDoState } from '../atoms';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';




const ToDoList = () => {
    const toDos = useRecoilValue(toDoState);
    return (
        <>
        <h1> To do list with recoil</h1>
            
            <ToDoForm/>
            <ul>
               {toDos.map(todo=> <ToDo {...todo}  key={todo.id}/>)}
            </ul>
        </>
    );
};

export default ToDoList;