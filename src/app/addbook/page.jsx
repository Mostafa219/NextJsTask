"use client";
// use client is used because we used onclick in button below
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function AddBook() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const addNewBook = async () => {
    await fetch(`http://localhost:3000/api/books`, {
      method: "POST",
      body: JSON.stringify({
        title: bookTitle,
        description: bookDescription,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    redirect("/booksList");
  };

  return (
    <div className=" container w-50 d-flex flex-column justify-content-center align-items-center gap-2">
      <label htmlFor="bookTitle" className="form-label">
        Book Title
      </label>
      <input
        type="text"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        className="form-control"
        id="bookTitle"
      />
      <label htmlFor="bookDescription" className="form-label">
        Book Description
      </label>
      <input
        type="text"
        value={bookDescription}
        onChange={(e) => setBookDescription(e.target.value)}
        className="form-control"
        id="bookDescription"
      />
      <button className="btn btn-primary" onClick={() => addNewBook()}>
        Add Book
      </button>
    </div>
  );
}
