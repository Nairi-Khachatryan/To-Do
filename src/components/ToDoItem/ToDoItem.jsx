import React from 'react';
import './todo-item.css';
import { FaTrash } from 'react-icons/fa6';


const ToDoItem = ({ todo, onDelete, onChange }) => {
  return (
    <div>
      <label className="todo-item">
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={(e) => {
            onChange({
              ...todo,
              isComplete: e.target.checked,
            });
          }}
        />
        {todo.text}
        <FaTrash
          className='trash-Btn'
          onClick={() => {
            onDelete(todo);
          }}
        >
          X
        </FaTrash>
      </label>
    </div>
  );
};

export default ToDoItem;
