import React, { useRef } from "react";

interface TodoFormProps {
  addToList: (enteredText: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = props => {
  const textInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInput.current!.value;
    props.addToList(enteredText);
    textInput.current!.value = "";
    textInput.current!.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="label" htmlFor="todo-text">
        Name your Todo:
      </label>
      <div className="input-group">
        <input className="input" type="text" id="todo-text" ref={textInput} />
        <button className="button" type="submit">Add </button>
      </div>
    </form>
  );
};

export default TodoForm;
