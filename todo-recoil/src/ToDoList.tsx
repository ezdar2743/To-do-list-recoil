import React, { useState } from 'react';
import {useForm} from "react-hook-form";


const ToDoList = () => {
    const {register, handleSubmit,formState}= useForm();
    const onValid = (data:any)=>{
        console.log(data)
    }
    console.log(formState.errors)
    return(
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input 
                placeholder='Input your Email'
                {...register("Email",{required:"Email is required",minLength:{
                    value:5,
                    message: "over 5"
                }})}
                ></input>
                <input 
                placeholder='Input your Id'
                {...register("FirstName",{required:"Id is required"})}
                ></input>
                <input 
                placeholder='Input your password'
                {...register("LastName",{required:true})}
                ></input>
               
            
                <button>Add</button>
            </form>
        </>
    )
    
};

export default ToDoList;