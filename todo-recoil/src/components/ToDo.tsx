import React from 'react';
import { IToDos } from '../atoms';
const ToDo = ({text,category,id}:IToDos) => {
    return (
        <li>
            <span>{text}</span>
            <button>To do</button>
            <button>Doing</button>
            <button>Done</button>
        
        </li>
    );
};

export default ToDo;