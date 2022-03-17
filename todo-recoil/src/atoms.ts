import { atom, selector } from 'recoil';


export enum Categories{
    "TO_DO"="TO_DO",
    "DOING"="DOING",
    "DONE"="DONE",
}

export interface IToDos{
    text: string;
    category:Categories;
    id: number;
}
export const toDoState = atom<IToDos[]>({key:"toDoList", default:[]})

export const categoryState = atom<Categories>({
    key:"category",
    default: Categories.TO_DO,
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get:({get})=>{
        const toDos = get(toDoState);
        const category = get(categoryState);
        if(category===Categories.TO_DO) return toDos.filter(toDo => toDo.category ===Categories.TO_DO)
        if(category===Categories.DOING) return toDos.filter(toDo => toDo.category ===Categories.DOING)
        if(category===Categories.DONE) return toDos.filter(toDo => toDo.category ===Categories.DONE)

        
        
        // return [
        //     toDos.filter(toDo => toDo.category ==="TO_DO"),
        //     toDos.filter(toDo => toDo.category ==="DOING"),
        //     toDos.filter(toDo => toDo.category ==="DONE"),
        // ]
    }
})