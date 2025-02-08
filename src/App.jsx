import React, { useReducer } from 'react';
import TodoList from './components/ToDoList/TodoList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoFooter from './components/ToDoFooter/ToDoFooter';
import './App.css';

function reducer(state, action) {
  if (action.type === 'add') {
    return [
      ...state,
      {
        id: Math.random(),
        text: action.payload.text,
        isComplete: false,
      },
    ];
  } else if (action.type === 'delete') {
    return state.filter((t) => t.id !== action.payload.id);
  } else if (action.type === 'change') {
    return state.map((todo) =>
      todo.id === action.payload.newToDo.id ? action.payload.newToDo : todo
    );
  } else if (action.type === 'clear') {
    return state.filter((item) => !item.isComplete);
  }
  return state;
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, [
    { text: 'Buy Milk', id: Math.random(), isComplete: false },
  ]);

  return (
    <div className="App">
      <ToDoForm
        onAdd={(text) => {
          dispatch({
            type: 'add',
            payload: {
              text,
            },
          });
        }}
      />
      <TodoList
        todos={todos}
        onChange={(newToDo) => {
          console.log(todos);
          console.log(newToDo, 'nwww');

          dispatch({
            type: 'change',
            payload: {
              newToDo,
            },
          });
        }}
        onDelete={(todo) => {
          dispatch({
            type: 'delete',
            payload: {
              id: todo.id,
            },
          });
        }}
      />
      <ToDoFooter
        todos={todos}
        handleClear={() => {
          dispatch({
            type: 'clear',
            payload: {
              todos,
            },
          });
        }}
      />
    </div>
  );
};

export default App;
