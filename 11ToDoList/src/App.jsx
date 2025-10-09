import { useState, useEffect } from 'react';
import { TodoProvider } from './context';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevList) => [{ id: Date.now(), ...todo }, ...prevList]);
  };

  const deleteTodo = (id) => {
    setTodos((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevList) =>
      prevList.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const toggleTodo = (id) => {
    setTodos((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Load todos from localStorage
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'));
    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos);
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          {/* Todo Form */}
          <div className="mb-4">
            <TodoForm />
          </div>

          {/* Todo List */}
          <div className="flex flex-wrap gap-y-3">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))
            ) : (
              <p className="text-center w-full text-gray-400">
                No todos yet. Add one above 👆
              </p>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;