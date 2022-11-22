import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./LogoutButton";

export const ProfileSet = () => {
  const { user, isAuthenticated } = useAuth0();

  localStorage.setItem("usuario", JSON.stringify(user));
  sessionStorage.setItem("usuario", JSON.stringify(user));


  return (
    isAuthenticated && (
      <>
                  <div className="flex-shrink-0 dropdown">
                    <a
                      href="#"
                      className="d-block link-dark text-decoration-none dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={user.picture}
                        alt={user.name}
                        width="55"
                        height="55"
                        className="rounded-circle"
                      />
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                      <li>
                        <a className="dropdown-item" href="#">
                          New project...
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <LogoutButton />
                      </li>
                    </ul>
                  </div>
                </>
    )
  );
};

