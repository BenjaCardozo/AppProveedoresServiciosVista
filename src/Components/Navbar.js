import React from "react";
import { LoginButton } from './../Elementos/LoginButton';
import { LogoutButton } from "../Elementos/LogoutButton";
import { useAuth0} from "@auth0/auth0-react";


export const Navbar = () => {
  const {user, isAuthenticated} = useAuth0();

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
            <a className="text-light" >
              ServiFast
            </a>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
            <LoginButton />
            <br/>
            <div class="flex-shrink-0 dropdown">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src='...' alt='...' width="32" height="32" class="rounded-circle"/>
          </a>
          <ul class="dropdown-menu text-small shadow">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><LogoutButton /></li>
          </ul>
        </div>
          </div>
        </div>
      </header> 
      </div>
    </nav>
  );
};


  