import React, { useEffect, useState } from 'react';
import style from './Alls.module.css'
interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function ToDo(): JSX.Element {
  const [todos, setTodos] = useState<TodoType[]>([]);
  
  async function loadToDo(): Promise<void> {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data: TodoType[] = await res.json();
    
    setTodos(data);
  }

  useEffect(() => {
    loadToDo();
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className={style.container}>
          <p>
            <strong style={{ marginRight: '10px' }}>User ID: {todo.userId}</strong> 
            <strong style={{ marginRight: '10px' }}>Id:</strong> {todo.id}, 
            <strong style={{ marginRight: '10px' }}>Title:</strong> {todo.title}
          </p>
        </div>
      ))}
    </>
  );
}
