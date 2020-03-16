import React from "react";

interface TodoListProps {
  items: {
    id: string;
    text: string;
  }[];
  removeItem: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <div className="container__todo">
      <ul>
        {props.items.map(todo => (
          <li className="todo__list-item" key={todo.id}>
            <p className="todo__title">{todo.text}</p>
            <button
              className="button button--close"
              onClick={() => {
                props.removeItem(todo.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
