import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

interface TodoObject {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoObject[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo: TodoObject = {
      id: `id-${Math.random()}`,
      text
    };
    setTodoList(prev => [...prev, newTodo]);
  };

  const removeTodoHandler = (todoId: string) =>
    setTodoList(prev => prev.filter(todo => todo.id !== todoId));

  return (
    <div className="container">
      <TodoForm addToList={addTodoHandler} />
      <TodoList items={todoList} removeItem={removeTodoHandler} />
    </div>
  );
};

export default App;
