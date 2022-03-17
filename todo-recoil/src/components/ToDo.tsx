import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IToDos, toDoState } from '../atoms';
// const Btn = styled.button`
//     font-size: 18px;
//     width: 80px;
//     border-radius: 15px;
//     margin-left: 10px;
//     background-color: ${props=>props.theme.accentColor};
//     color: ${props=>props.theme.textColor};
//     transition: 0.5 ease-in;
//     cursor: pointer;
//     border: none;
//     &:hover{
//         background-color: ${props=>props.theme.textColor};
//         color: ${props=>props.theme.accentColor};
//         transform: scale(1.1);
//     }`;
const ToDo = ({text,category,id}:IToDos) => {

    const setToDos = useSetRecoilState(toDoState)
    
    const onClick = (selCat : IToDos["category"])=>{
        setToDos((oldList) => {
            const targetIndex = oldList.findIndex( i => i.id ===id);
            const newTodo = {text,id,category: selCat}
            const front = oldList.slice(0,targetIndex);
            const back = oldList.slice(targetIndex+1)
            const change = [...front,newTodo,...back];
            
            return change;
        })    

    }
    return (
        <li>
            <span>{text}</span>
            {category !== "TO_DO"&&<button onClick={()=>onClick("TO_DO")}>To do</button>}
            {category !== "DOING"&&<button onClick={()=>onClick("DOING")}>Doing</button>}
            {category !== "DONE" &&<button onClick={()=>onClick("DONE")}>Done</button>}
        
        </li>
    );
};

export default ToDo;