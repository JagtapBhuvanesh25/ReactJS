import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //just to Visualise
    todos: [
        {   
            id: 1,
            todoText: "Todo Msg",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id , todo) => {},
    toggleTodo: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;