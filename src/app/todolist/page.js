import React from "react";
import AddTodo from "./add/page.js";
export default async function TodoList() {
  let res = await fetch(`http://localhost:3000/api/todo`);
  let { data: allTodos } = await res.json();
  console.log("allTodos", allTodos);

  return (
    <>
      <div className="container d-flex justify-content-center text-center w-100 ">
        <AddTodo />
      </div>
      <div className="container d-flex justify-content-center flex-wrap w-100 gap-3 mb-5">
        {allTodos.map((todo) => (
          <div key={todo._id} className="card w-50 p-3">
            <h3>{todo.title}</h3>
            <p
              className={`card-text ${
                todo.status === "done"
                  ? "text-success"
                  : todo.status === "inprogress"
                  ? "text-warning"
                  : "text-danger"
              }`}
            >
              {todo.status}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
