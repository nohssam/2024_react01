import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(['Learn React', 'Build a project']);
  const [newTodo, setNewTodo] = useState('');

  // 새로운 할 일 추가
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  // 할 일 삭제
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Typing: {newTodo}</p>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add New Task</button>
    </div>
  );
}

export default TodoList;