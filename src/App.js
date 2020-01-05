import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트",
      checked: true
    },
    {
      id: 2,
      text: "공부",
      checked: false
    },
    {
      id: 3,
      text: "운동",
      checked: true
    },
  ])



  return (
    <>
      <TodoTemplate>
        <TodoInsert/>
        <TodoList todos={todos}/>
      </TodoTemplate>
    </>
  );
}

export default App;
