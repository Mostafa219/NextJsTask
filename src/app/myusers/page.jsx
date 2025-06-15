import React, { Suspense } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import UsersList from "@/components/userslist";
import Loading from "../loading";
export const metadata = {
  title: "users Page",
};
export default async function UsersPage() {
  // let allUsers = [];

  // try {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/users"
  //   );

  //   allUsers = response.data;
  // } catch (error) {
  //   console.error("An error occurred while fetching data:", error);
  //   return (
  //     <div className="container py-5 text-center">
  //       <p className="text-danger">
  //         Could not load user data. Please try again later.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <>
      <h1 className="text-center p-3 pb-1">All users </h1>
      <p className="text-center" style={{ color: "grey" }}>
        trying to apply suspense here{" "}
      </p>
      <div className="container pb-5">
        <Suspense
          fallback={
            // <>
            //   <div className="d-flex justify-content-center align-items-center">
            //     <div
            //       className="spinner-border"
            //       style={{ width: "3rem", height: "3rem" }}
            //       role="status"
            //     ></div>
            //     <div
            //       className="spinner-grow"
            //       style={{ width: "3rem", height: "3rem" }}
            //       role="status"
            //     ></div>
            //   </div>
            // </>
            <Loading />
          }
        >
          <UsersList />
        </Suspense>
      </div>
    </>
  );
}
