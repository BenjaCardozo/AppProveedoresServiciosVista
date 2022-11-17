import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Card = () => {
  const {user} = useAuth0();

  return (
     (
      <div>
        <div class="card" style="width: 18rem;">
          <img src={user.picture} class="card-img-top" alt={user.name} />
          <div class="card-body">
            <h5 class="card-title">{user.name}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{user.email}</li>
            <li class="list-group-item"></li>
            <li class="list-group-item"></li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Card;
