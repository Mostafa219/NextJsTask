import { todoModel } from "@/app/_lib/models/todo";
import React from "react";
import { redirect } from "next/navigation";
export default function AddTodo() {
  async function addTodo(formData) {
    "use server";
    console.log(formData);
    const title = formData.get("todoTitle");
    const status = formData.get("todoStatus");
    console.log(title, status);
    await todoModel.create({ title, status });
    redirect("/todolist");
  }
  return (
    <>
      <form
        action={addTodo}
        className="m-auto w-50 d-flex flex-column gap-3 py-5"
      >
        <div className="form-group">
          <label>Todo title</label>
          <input type="text" name="todoTitle" className="form-control" />
        </div>
        <div className="form-group">
          <label>Todo status </label>
          <input
            type="text"
            name="todoStatus"
            className="form-control"
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
