import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { IToDos, toDo } from '../atoms';

interface IForm{
    toDo: string
}
const ToDoForm = () => {
    const setToDos = useSetRecoilState(toDo);
    const {register,handleSubmit,setValue}= useForm<IForm>();
    
    const onSubmit=(data:IForm)=>{
        setToDos(preData=>[{text:data.toDo, category:'TO_DO', id:Date.now()},...preData])
        setValue("toDo","")    
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                placeholder='Input your to do'
                {...register("toDo",{required:"Please Input your to do"} )}
                />
                <button>Add</button>
            </form>
    );
};

export default ToDoForm;