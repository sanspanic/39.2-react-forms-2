import React, { useState } from "react";

const NewTodoForm = ({ addItem }) => {
  const initialState = { text: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Todo item</label>
      <input
        id="text"
        name="text"
        placeholder="todo"
        value={formData.text}
        onChange={handleChange}
      ></input>
      <button>Add</button>
    </form>
  );
};

export default NewTodoForm;
