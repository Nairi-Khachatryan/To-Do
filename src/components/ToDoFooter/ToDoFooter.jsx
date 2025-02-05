import React from 'react';
import './footer.css'
const ToDoFooter = ({ todos, handleClear }) => {

  const isCompleteCount = todos.filter((todo) => todo.isComplete);
  return (
    <div className='todo-footer' >
      <span className='completed-screen' >
        {isCompleteCount.length} / {todos.length}
      </span>
      <button className='clear-btn' onClick={handleClear} >Clear</button>
    </div>
  );
};

export default ToDoFooter;
