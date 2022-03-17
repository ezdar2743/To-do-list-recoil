import React from 'react';
import { IToDos } from '../atoms';
const ToDo = ({text,category,id}:IToDos) => {
    return (
        <li>
            <span>{text}</span>
            {category !== "TO_DO"&&<button>To do</button>}
            {category !== "DOING"&&<button>Doing</button>}
            {category !== "DONE" &&<button>Done</button>}
        
        </li>
    );
};

export default ToDo;