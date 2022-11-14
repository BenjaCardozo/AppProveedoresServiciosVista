import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();
    const companyName = 'ServiFast';

  return (
    <div>
      <footer className="container">
        <p className="float-end">
          <a href="#">Inicio</a>
        </p>
        <p>
          &copy; {year} {companyName}, Inc. &middot; <a href="#">Privacy</a>{" "}
          &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
