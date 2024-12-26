import { useState } from "react";
import Todo from "./Todo";
import "./TodoAPP.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h2 className="heading">Todo App</h2>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="input"
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
