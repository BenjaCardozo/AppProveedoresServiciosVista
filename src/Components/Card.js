import React from "react";

const Card = (props) => {
  
  return (
      <div>
        <div className="card" style="width: 18rem;">
          <img src={props.picture} className="card-img-top" alt={props.name} />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.email}</li>
            <li className="list-group-item"></li>
            <li className="list-group-item"></li>
          </ul>
        </div>
      </div>
    );
};

export default Card;
