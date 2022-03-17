import { atom, selector } from 'recoil';


export interface IToDos{
    text: string;
    category: "TO_DO"|"DOING"|"DONE";
    id: number;
}
export const toDoState = atom<IToDos[]>({key:"toDoList", default:[]})

export const toDoSelector = selector({
    key: "toDoSelector",
    get:({get})=>{
        const toDos = get(toDoState);
        return [
            toDos.filter(toDo => toDo.category ==="TO_DO"),
            toDos.filter(toDo => toDo.category ==="DOING"),
            toDos.filter(toDo => toDo.category ==="DONE"),
        ]
    }
})