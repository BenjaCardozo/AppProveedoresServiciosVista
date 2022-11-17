import React from "react";
import { LoginButton } from "./../Elementos/LoginButton";
import { ProfileSet } from "../Elementos/ProfileSet";
import { useAuth0, User } from "@auth0/auth0-react";

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="bg-dark">
      <div className="container">
        <header className="blog-header lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#">
                Inicio
              </a>
            </div>
            <div className="col-4 text-center">
              <h2 className="text-light">ServiFast</h2>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  className="form-control form-control-dark text-bg-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <a className="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              {isAuthenticated ? (
                <ProfileSet />
              ) : (
                <LoginButton />
              )}
              <br />
            </div>
          </div>
        </header>
      </div>
    </nav>
  );
};
