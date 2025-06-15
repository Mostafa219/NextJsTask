import React from "react";
export default async function TodoList() {
  let res = await fetch(`http://localhost:3000/api/todo`);
  let { data: allTodos } = await res.json();
  console.log("allTodos", allTodos);

  return (
    <>
      {allTodos.map((todo) => (
        <div key={todo._id}>
          <h1>{todo.title}</h1>
          <p>{todo.status}</p>
        </div>
      ))}
    </>
  );
}
