import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.models';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
  // const todos = [{id: 't1', text: 'Finish the course'}];

  const deleteButtonHandler = (todoId:string) => {
        setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.id !== todoId);
        });
  }

  const todoAddHandler = (text:string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}  />
      <TodoList items={todos} onDeleteTodo={deleteButtonHandler}/>
    </div>
  );
}

export default App;
