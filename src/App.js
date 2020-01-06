import React, { useState, useCallback, useRef } from 'react';
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
  // 지역 변수로 사용하기 위해 useRef hook 사용
  const nextId = useRef(4);
  
  // 글 추가 함수
  const onInsert = useCallback(
    text=>{
      const todo = {
        id: nextId.current,
        text,
        checked: false
      }
      setTodos(todos.concat(todo));
      nextId.current += 1;
  }, [todos])

  // 글 삭제 함수
  const onRemove = useCallback(
    id=>{
      setTodos(todos.filter( todo => id !== todo.id))
    }, [todos]
  )

  // check 함수
  const onToggle = useCallback(
    id=>{
      setTodos(todos.map(todo=>
        // 선택한 todo의 checked 값만 반대로 설정
        id === todo.id ? { ...todo, checked: !todo.checked} : todo
      ))
    }, [todos]
  )

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </>
  );
}

export default App;
