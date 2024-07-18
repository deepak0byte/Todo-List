import React from 'react';
import { Button, Checkbox } from 'flowbite-react';

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const handleToggle = () => {
    onUpdate(todo.id, { ...todo, completed: !todo.completed });
  };

  return (
    <div className="flex justify-between items-center">
      <Checkbox checked={todo.completed} onChange={handleToggle} />
      <span className={todo.completed ? 'line-through' : ''}>{todo.todo}</span>
      <Button color="failure" onClick={() => onDelete(todo.id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;
