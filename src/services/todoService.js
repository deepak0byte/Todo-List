import axios from 'axios';

const API_URL = 'https://dummyjson.com/todos';

export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = async (todo) => {
  try {
    const response = await axios.post(API_URL, todo);
    return response.data;
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const updateTodo = async (id, updatedTodo) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};
