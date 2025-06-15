import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className={`navbar-brand ${styles.navbarBrand}`} href="#">
            Next.js
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse d-flex justify-content-center navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav fs-5 py-2 ">
              <li className="nav-item px-3">
                <Link
                  className={`nav-link  ${styles.navLinkCustom}`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className={`nav-link ${styles.navLinkCustom}`}
                  href="/myusers"
                >
                  Users
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className={`nav-link ${styles.navLinkCustom}`}
                  href="/booksList"
                >
                  Books
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className={`nav-link ${styles.navLinkCustom}`}
                  href="/todolist"
                >
                  Todos
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className={`nav-link ${styles.navLinkCustom}`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className={`nav-link ${styles.navLinkCustom}`}
                  href="/contactus"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className={`nav-link ${styles.navLinkCustom}`}
                  href="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  className={`nav-link ${styles.navLinkCustom}`}
                  href="/register"
                >
                  register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
