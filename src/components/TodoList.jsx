import React, { useState } from 'react';
import { Divider } from 'antd';
import { AddToDo } from './AddTodo';

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: 'Aprender React', completed: false},
    { text: 'Dar de comer al perro', completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <AddToDo/>
    </div>
  )
}
