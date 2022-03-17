import { atom, selector } from 'recoil';


export interface IToDos{
    text: string;
    category: "TO_DO"|"DOING"|"DONE";
    id: number;
}
export const toDoState = atom<IToDos[]>({key:"toDoList", default:[]})

export const categoryState = atom({
    key:"category",
    default: "TO_DO",
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get:({get})=>{
        const toDos = get(toDoState);
        const category = get(categoryState);
        if(category==="TO_DO") return toDos.filter(toDo => toDo.category ==="TO_DO")
        if(category==="DOING") return toDos.filter(toDo => toDo.category ==="DOING")
        if(category==="DONE") return toDos.filter(toDo => toDo.category ==="DONE")

        
        
        // return [
        //     toDos.filter(toDo => toDo.category ==="TO_DO"),
        //     toDos.filter(toDo => toDo.category ==="DOING"),
        //     toDos.filter(toDo => toDo.category ==="DONE"),
        // ]
    }
})