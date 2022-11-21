import React from "react";
import { LoginButton } from "./../Elementos/LoginButton";
import { ProfileSet } from "../Elementos/ProfileSet";
import { useAuth0 } from "@auth0/auth0-react";
import Buscador from "../Elementos/Buscador";


export const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="bg-dark navbaset">
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
              <Buscador />
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
