import { atom } from 'recoil';


export interface IToDos{
    text: string;
    category: "TO_DO"|"DOING"|"DONE";
    id: number;
}
export const toDoState = atom<IToDos[]>({key:"toDoList", default:[]})