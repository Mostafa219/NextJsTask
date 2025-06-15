import { signIn, signOut } from "@/app/_lib/auth";
import React from "react";

export default function Login() {
  async function loginWithGoogle() {
    "use server";

    await signIn("google", {
      redirectTo: "/",
    });
  }
  async function logout() {
    "use server";

    await signOut({
      redirectTo: "/",
    });
  }
  return (
    <>
      <div className="container vh-100 text-center d-flex justify-content-center align-items-center ">
        <div className="mt-5">
          <form action={loginWithGoogle}>
            <button className="btn btn-primary btn-block mb-4">
              Sign in With Google
            </button>
          </form>
          <form action={logout}>
            <button className="btn btn-danger btn-block mb-4">Logout</button>
          </form>
        </div>
      </div>
    </>
  );
}
