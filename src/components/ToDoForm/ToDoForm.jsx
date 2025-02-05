import React, { useState } from 'react';
import { IoAddCircleSharp } from 'react-icons/io5';
import './form.css';

const ToDoForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
  
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim()) {
          setInputValue('');
          onAdd(inputValue);
        }
      }}
    >
      <input
        className="main-input"
        type="text"
        placeholder="   Type Task Here..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button type="submit" className="add-btn">
        <IoAddCircleSharp role="btn" className="add-icon" />
      </button>
    </form>
  );
};

export default ToDoForm;
