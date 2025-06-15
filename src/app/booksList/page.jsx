"use client";
import React, { useEffect, useState } from "react";
import AddBook from "../addbook/page";

export default function BooksList() {
  const [booksData, setBooksData] = useState([]);
  const [editBookId, setEditBookId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  useEffect(() => {
    fetchbooks();
  }, []);

  const fetchbooks = async () => {
    const res = await fetch(`http://localhost:3000/api/books`);
    const { data } = await res.json();
    setBooksData(data);
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:3000/api/books?id=${id}`, {
      method: "DELETE",
    });
    fetchbooks();
  };

  const editBook = (book) => {
    setEditBookId(book.id);
    setEditedTitle(book.title);
  };

  const saveBook = async (id) => {
    await fetch(`http://localhost:3000/api/books?id=${id}`, {
      method: "PUT",
      body: JSON.stringify({ title: editedTitle }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setEditBookId(null);
    fetchbooks();
  };
  return (
    <>
      <div className="container pb-5">
        <h1 className="text-center pt-4">BooksList</h1>
        <AddBook />
        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {booksData.map((book) => (
              <div className="col" key={book.id}>
                <div className="card">
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      {editBookId === book.id ? (
                        <>
                          <input
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="form-control mb-2"
                          />
                          <button
                            className="btn btn-info btn-sm"
                            onClick={() => saveBook(book.id)}
                          >
                            Save
                          </button>
                        </>
                      ) : (
                        <>
                          <h5 className="card-title">{book.title}</h5>
                          <p className="card-title" style={{ color: "gray" }}>
                            {book.description}
                          </p>
                        </>
                      )}
                    </div>
                    <div className="btns">
                      <button
                        type="button"
                        className="btn btn-success px-3 py-2 my-2 w-100"
                        onClick={() => editBook(book)}
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger px-3 py-2 my-2 w-100"
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
