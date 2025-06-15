"use client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function AddTodo() {
  const [todoData, setTodoData] = useState({
    title: "",
    status: "",
  });
  const handleChange = (event) => {
    if (event.target.name === "todoTitle") {
      setTodoData({ ...todoData, title: event.target.value });
    } else if (event.target.name === "todoStatus") {
      setTodoData({ ...todoData, status: event.target.value });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetch("http://localhost:3000/api/todo", {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    redirect("/todolist");
  };

  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-75 d-flex flex-column gap-3 py-5"
      >
        <div className="form-group">
          <label>Todo title</label>
          <input
            type="text"
            name="todoTitle"
            className="form-control"
            value={todoData.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Todo status </label>
          <input
            type="text"
            name="todoStatus"
            className="form-control"
            value={todoData.status}
            onChange={(e) => handleChange(e)}
            placeholder="stutus must be one of todo, inprogress, done"
          />
        </div>

        <button type="submit" className="btn btn-primary my-3">
          Add Todo
        </button>
      </form>
    </>
  );
}
