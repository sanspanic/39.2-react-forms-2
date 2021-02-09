import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "feed cat", id: uuid() },
    { text: "go out", id: uuid() },
  ]);

  const addItem = (item) => {
    setTodos((todos) => [...todos, { ...item, id: uuid() }]);
  };

  const remove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const update = (formData, id) => {
    const updatedTodo = { text: formData.text, id: id };
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div className="TodoList">
      <h2>Todo List</h2>
      <NewTodoForm key={uuid()} addItem={addItem} />
      <ul>
        {todos.map((todo) => (
          <Todo
            update={update}
            remove={remove}
            key={todo.id}
            id={todo.id}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
