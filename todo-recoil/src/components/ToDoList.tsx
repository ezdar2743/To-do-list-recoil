
import React from 'react';
import {  useRecoilState, useRecoilValue} from 'recoil';
import styled from 'styled-components';
import {  Categories, categoryState, toDoSelector } from '../atoms';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    
`;
const Box = styled.div`
    `;

const ToDoList = () => {
    
    const [category,setCategory] = useRecoilState(categoryState);
    const toDos = useRecoilValue(toDoSelector);
    const onInput= (event : React.FormEvent<HTMLSelectElement>)=>{
        setCategory(event.currentTarget.value as any)
    }
    return (
        <>
        <h1> To do list with recoil</h1>
        <hr/>
            <select onInput={onInput} >
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </select>
            <ToDoForm/>
            {toDos?.map(todo=><ToDo key={todo.id} {...todo}/>)}
            
            
        </>
    );
};

export default ToDoList;