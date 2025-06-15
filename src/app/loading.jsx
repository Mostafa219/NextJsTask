import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
export const metadata = {
  title: "Loading Page",
};
export default function Loading() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    </>
  );
}
