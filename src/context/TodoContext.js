import { createContext,useContext } from "react";


export const TodoContext = createContext({
    todos:[
        {id:1, title: 'First todo', completed: false},
        {id:2, title: 'Second todo', completed: false},
        {id:3, title: 'Third todo', completed: false},
    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}