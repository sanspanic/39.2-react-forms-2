import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task = "write tests") {
  const taskInput = todoList.getByLabelText("Todo item");
  fireEvent.change(taskInput, { target: { value: task } });
  const submitButton = todoList.getByText("Add");
  fireEvent.click(submitButton);
}

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", function () {
  const list = render(<TodoList />);
  addTodo(list);

  // expect form to clear and todo to be on the page
  expect(list.getByLabelText("Todo item")).toHaveValue("");
  expect(list.getByText("write tests")).toBeInTheDocument();
  expect(list.getByText("Edit")).toBeInTheDocument();
  expect(list.getByText("X")).toBeInTheDocument();
});
