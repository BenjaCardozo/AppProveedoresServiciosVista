import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Card = () => {
  const {user , isAuthenticated} = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <div className="card" style="width: 18rem;">
          <img src={user.picture} className="card-img-top" alt={user.name} />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{user.email}</li>
            <li className="list-group-item"></li>
            <li className="list-group-item"></li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Card;
