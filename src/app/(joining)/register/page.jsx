import React from "react";
export const metadata = {
  title: "register Page",
};
export default function Register() {
  return (
    <div className="text-center container mt-5 w-50">
      <h1> Sign Up page </h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput0" className="form-label">
          username
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput0"
          placeholder="mostafaarafat"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <label htmlFor="inputPassword5" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-describedby="passwordHelpBlock"
      />
      <div id="passwordHelpBlock" className="form-text">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </div>
      <button type="button" className="btn btn-outline-primary w-50">
        SignUp
      </button>
    </div>
  );
}
