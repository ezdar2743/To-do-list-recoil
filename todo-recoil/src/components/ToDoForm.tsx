import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoryState, toDoState } from '../atoms';

// const Header = styled.div`
//     height: 100px;
//     display: flex;
//     justify-content: center;
// `;
// const Input = styled.input`
//     width: 300px;
//     padding: 0 16px;
//     height: 30px;
//     border-radius: 15px;
//     font-size: 18px;
// `;
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
//     }
// `;

interface IForm{
    toDo: string
}
const ToDoForm = () => {
    const setToDos = useSetRecoilState(toDoState);
    const category= useRecoilValue(categoryState);
    const {register,handleSubmit,setValue}= useForm<IForm>();
    
    const onSubmit=(data:IForm)=>{
        setToDos(preData=>[{text:data.toDo, category, id:Date.now()},...preData])
        setValue("toDo","")    
    }
    return (
        <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    placeholder='Input your to do'
                    {...register("toDo",{required:"Please Input your to do"} )}
                    />
                    <button>Add</button>
                </form>
            </div>
    );
};

export default ToDoForm;