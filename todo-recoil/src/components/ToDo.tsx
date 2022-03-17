import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Categories, IToDos, toDoState } from '../atoms';

const ToDo = ({text,category,id}:IToDos) => {
    const setToDos = useSetRecoilState(toDoState)
    
    const onClick = (selCat : Categories)=>{
        setToDos((oldList) => {
            const targetIndex = oldList.findIndex( i => i.id ===id);
            const newTodo = {text,id,category: selCat}
            const front = oldList.slice(0,targetIndex);
            const back = oldList.slice(targetIndex+1)
            const change = [...front,newTodo,...back];
            
            return change;
        })  
    }
    const handleDelete = ()=>{
        setToDos((oldList)=> {
            const index = oldList.findIndex(i => i.id ===id);
            const front = oldList.slice(0,index);
            const back = oldList.slice(index+1);
            return [...front,...back]
        })
    }
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.TO_DO&&<button onClick={()=>onClick(Categories.TO_DO)}>To do</button>}
            {category !== Categories.DOING&&<button onClick={()=>onClick(Categories.DOING)}>Doing</button>}
            {category !== Categories.DONE &&<button onClick={()=>onClick(Categories.DONE)}>Done</button>}
            {<button onClick={handleDelete}>Delete</button>}
        </li>
    );
};

export default ToDo;