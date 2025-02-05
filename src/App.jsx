import React, { useState } from 'react';
import TodoList from './components/ToDoList/TodoList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoFooter from './components/ToDoFooter/ToDoFooter';
import './App.css';

const App = () => {
  const [todos, setToDos] = useState([
    { text: 'Buy Milk', id: Math.random(), isComplete: false },
  ]);

  return (
    <div className="App">
      <ToDoForm
        onAdd={(text) => {
          setToDos([
            ...todos,
            { text: text, id: Math.random(), isComplete: false },
          ]);
        }}
      />
      <TodoList
        todos={todos}
        onChange={(newToDo) => {
          setToDos(
            todos.map((todo) => {
              if (todo.id === newToDo.id) {
                return newToDo;
              } else {
                return todo;
              }
            })
          );
        }}
        onDelete={(todo) => {
          setToDos(todos.filter((t) => t.id !== todo.id));
        }}
      />
      <ToDoFooter
        todos={todos}
        handleClear={() => {
          setToDos(todos.filter((item) => !item.isComplete));
        }}
      />
    </div>
  );
};

export default App;
