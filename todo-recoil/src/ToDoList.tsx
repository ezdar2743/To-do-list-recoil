import React, { useState } from 'react';
import {useForm} from "react-hook-form";

interface IForm{
    Email: string;
    password: string;
    password1: string;

}
const ToDoList = () => {
    const {register, handleSubmit,formState:{errors},setError}= useForm<IForm>({
        defaultValues: { 
            Email: "@naver.com"
        }
    });
    const onValid = (data:IForm)=>{
       if(data.password !==data.password1){
           setError("password1",{message:"now same"},
           {shouldFocus:true})
       }
    }
    
    return(
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input 
                placeholder='Input your Email'
                {...register("Email",
                {required:"Email is required",
                validate: {noEz:(value)=>value.includes("ez")? "can not use ez":true},
                pattern:{
                    value:/^[A-Za-z0-9._%+-]+@naver.com$/,
                    message: "Only naver.com emails allowed"},
                minLength:{
                    value:5,
                    message: "over 5"},
                    
                })}/>
                <span>
                    {errors?.Email?.message}
                </span>

                <input 
                placeholder='Input your password'
                {...register("password",{required:"Id is required"})}/>
                <span>{errors?.password?.message}</span>
                <input 
                placeholder='Input your password'
                {...register("password1",{required:true})}
                />
                <span>{errors?.password1?.message}</span>
            
                <button>Add</button>
            </form>
        </>
    )
    
};

export default ToDoList;