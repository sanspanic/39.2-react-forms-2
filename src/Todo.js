import React, { useState } from "react";

const Todo = ({ text, id, remove, update }) => {
  const [isDone, setIsDone] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({ text: "" });

  const handleRemove = () => {
    remove(id);
  };

  const handleToggle = () => {
    setIsDone((isDone) => !isDone);
  };

  const handleEdit = () => {
    setIsEditable((isEditable) => true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update(formData, id);
    setIsEditable((isEditable) => false);
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">New todo</label>
      <input
        type="text"
        name="text"
        placeholder={text}
        id={text}
        onChange={handleChange}
      ></input>
      <button>Accept</button>
    </form>
  );

  const todoItem = (
    <>
      <div
        style={isDone ? { textDecoration: "line-through" } : null}
        id={id}
        className="Todo"
      >
        {text}
      </div>
      <button onClick={handleToggle}>Toggle done</button>
      <button onClick={handleRemove}>X</button>
      <button onClick={handleEdit}>Edit</button>
    </>
  );

  return <li>{isEditable ? form : todoItem}</li>;
};

export default Todo;
