import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="!/menu" className="header">
      <nav className="navbar fixed-top navbar-dark bg-primary navbar-expand-lg">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".collapse.navbar-collapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav nav nav-pills nav-fill w-100">
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/works" className="nav-item nav-link">
                Works
              </Link>
            </div>
            <Link to="/" className="navbar-brand mx-auto active">
              <svg viewBox="0 0 112 148" className="logo logo--big" width="100">
                <use xlinkHref="#logo" />
              </svg>
            </Link>
            <ul className="navbar-nav nav nav-pills nav-fill w-100">
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <a href="#!/menu" className="menu-handler menu-handler_show" title="Show Menu">
        <svg viewBox="0 0 16 12" className="icon icon-menu">
          <use xlinkHref="#icon-menu" />
        </svg>
      </a>
      <a href="#!/close-menu" className="menu-handler menu-handler_close" title="Close Menu">
        <svg viewBox="0 0 16 12" className="icon icon-close">
          <use xlinkHref="#icon-close" />
        </svg>
      </a> */}
    </header>
  );
};

export default Header;
