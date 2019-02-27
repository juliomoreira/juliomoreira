import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="navbar fixed-bottom navbar-dark">
        <div className="container">
          <p className="navbar-text mx-auto my-0">
            <small>
              Made with
              <span className="icon icon_heart" title="Love">
                &#10084;
              </span>
              in Porto Alegre for the world,{" "}
              <a href="//github.com/juliomoreira/juliomoreira.github.io" title="View the code on GitHub">
                grab the code here
              </a>
              .
            </small>
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
