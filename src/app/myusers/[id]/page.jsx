import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";

export async function generateMetadata({ params }) {
  let { id } = params;
  let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let user = await res.json();
  return {
    title: user.name,
  };
}
export async function generateStaticParams() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let users = await res.json();
  const ids = users.map((user) => {
    return { id: user.id.toString() };
  });
  console.log("this is your ssr");
  console.log(ids);
  return ids;
}
export default async function ProductDetails({ params }) {
  let { id } = params;

  let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let user = await res.json();

  if (!user.id) {
    notFound();
  }
  return (
    <>
      <div className="pb-5">
        <h3 className="text-center p-3">Welcome to userDetails Page</h3>
        <div className="container mb-5">
          <div className="col" key={user.id}>
            <div className="card ">
              <Image
                src={`https://i.pravatar.cc/150?u=${user.id}`}
                className="card-img-top"
                alt={user.name}
                width={400}
                height={300}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text text-muted">{user.email}</p>
                <p className="card-text text-muted">{user.phone}</p>
                <p className="card-text text-muted">{user.website}</p>
                <p className="card-text mt-auto ">
                  city name: <strong>{user.address.city}</strong>
                </p>
                <p className="card-text mt-auto ">
                  street : <strong>{user.address.street}</strong>
                </p>
                <p className="card-text mt-auto ">
                  Works at: <strong>{user.company.name}</strong>
                </p>
                <p className="card-text mt-auto ">
                  company field: <strong>{user.company.bs}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
