import React from 'react';
import { useForm } from 'react-hook-form';

interface IToDo{
    toDo: string
}


const ToDoList = () => {
    const {register, handleSubmit,setValue}= useForm<IToDo>();
    const onSubmit=(data:IToDo)=>{
        console.log(data.toDo)
        setValue("toDo","")    
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                placeholder='Input your to do'
                {...register("toDo",{required:"Please Input your to do"} )}
                />
                <button>Add</button>
            </form>
            
        </>
    );
};

export default ToDoList;