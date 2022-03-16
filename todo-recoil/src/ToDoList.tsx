import React, { useState } from 'react';
import {useForm} from "react-hook-form";


const ToDoList = () => {
    const {register, watch}= useForm();
    console.log(watch())
    return(
        <>
            <form>
                <input 
                placeholder='Input your Email'
                {...register("Email")}
                ></input>
                <input 
                placeholder='Input your Email'
                {...register("FirstName")}
                ></input>
                <input 
                placeholder='Input your Email'
                {...register("LastName")}
                ></input>
               
            
                <button>Add</button>
            </form>
        </>
    )
    
};

export default ToDoList;