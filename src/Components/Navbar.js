import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from './../Elementos/LoginButton';
import { LogoutButton } from "../Elementos/LogoutButton";

export const Navbar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <nav class="bg-dark">
    <div class="container">
      <header class="blog-header lh-1 py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a class="link-secondary" href="#">
              Inicio
            </a>
          </div>
          <div class="col-4 text-center">
            <a class="text-light" >
              ServiFast
            </a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <form
              class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                class="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <a class="link-secondary" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
            
            <LoginButton />
            <LogoutButton />

          </div>
        </div>
      </header>
    </div>
    </nav>
  );
};


{/* <button
onClick={() => loginWithRedirect()}
class="btn btn-outline-light me-2"
>
Login
</button> */}