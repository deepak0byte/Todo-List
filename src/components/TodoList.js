import React, { useEffect, useState } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/todoService';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { Button } from 'flowbite-react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };

  const handleAdd = async (newTodo) => {
    const addedTodo = await addTodo(newTodo);
    setTodos([...todos, addedTodo]);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdate = async (id, updatedTodo) => {
    const updated = await updateTodo(id, updatedTodo);
    setTodos(todos.map(todo => (todo.id === id ? updated : todo)));
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div>
      <AddTodo onAdd={handleAdd} />
      <div className="flex justify-center space-x-4 mb-4">
        <Button onClick={() => handleFilterChange('all')}>All</Button>
        <Button onClick={() => handleFilterChange('completed')}>Completed</Button>
        <Button onClick={() => handleFilterChange('pending')}>Pending</Button>
      </div>
      <div>
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
