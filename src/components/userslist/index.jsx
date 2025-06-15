import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function UsersList() {
  let allUsers = [];

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    allUsers = response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return (
      <div className="container py-5 text-center">
        <p className="text-danger">
          Could not load user data. Please try again later.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allUsers.map((user) => (
          <Link key={user.id} href={`/myusers/${user.id}`}>
            <div className="col">
              <div className="card h-100">
                <Image
                  src={`https://i.pravatar.cc/150?u=${user.id}`}
                  className="card-img-top"
                  alt={user.name}
                  width={400}
                  height={300}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text text-muted">{user.email}</p>
                  <p className="card-text mt-auto">
                    Works at: <strong>{user.company.name}</strong>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
