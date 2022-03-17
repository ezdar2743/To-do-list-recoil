
import {  useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {  toDoSelector } from '../atoms';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    
`;
const Box = styled.div`
    `;


const ToDoList = () => {
    const [toDo,doing,done] = useRecoilValue(toDoSelector);
    return (
        <>
        <h1> To do list with recoil</h1>
        <hr/>
            
            <ToDoForm/>
            <Container>
                <Box>
                    <h1>TO DO</h1>
                    <hr/>
                    <ul>
                    {toDo.map(todo=> <ToDo {...todo}  key={todo.id}/>)}
                </ul>
                </Box>
                <Box>
                <h1>DOING</h1>
                <hr/>
                <ul>
                {doing.map(todo=> <ToDo {...todo}  key={todo.id}/>)}
                </ul>
                </Box>
                <Box>
                <h1>DONE</h1>
                <hr/>
                <ul>
                {done.map(todo=> <ToDo {...todo}  key={todo.id}/>)}
                </ul>
                </Box>
            </Container>
        </>
    );
};

export default ToDoList;