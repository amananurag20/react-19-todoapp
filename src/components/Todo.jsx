// eslint-disable-next-line react/prop-types
const Todo = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
