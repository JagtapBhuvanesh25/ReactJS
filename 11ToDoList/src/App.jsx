import { useState , useEffect } from 'react';
import { TodoProvider } from './context';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos((prevlist) => [{id: Date.now() , ...todo} , ...prevlist])
  }

  const deleteTodo = (id) =>{
    setTodos((prevlist) => prevlist.filter((todo) => (todo.id !== id)));
  }

  const updateTodo = (id , todo) =>{
    setTodos((prevlist) => prevlist.map((innertodo) => ((innertodo.id === id) ? todo : innertodo)));
  }

  const toggleTodo = (id) =>{
    setTodos((prevlist) => prevlist.map((innertodo) => innertodo.id === id ? {...innertodo , completed: !innertodo.completed} : innertodo));
  }

  useEffect(() => {
    const localtodos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length>0){
      setTodos(localtodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  }, [todos])
  
  return (
    <TodoProvider value={{todos , addTodo , deleteTodo , updateTodo , toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                  <TodoItem />
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App