import React, { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';

const AddTodo = ({ onAdd }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText) {
      onAdd({ todo: todoText, completed: false });
      setTodoText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
