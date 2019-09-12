import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = props => {
  const { location: { pathname = "" } = {} } = props;
  return (
    <header className="header w-100">
      <nav className="flex justify-around items-center h5 pv3">
        <Link to="/about" className="no-underline dim black w3 tc">
          About
        </Link>
        <Link to="/works" className="no-underline dim black w3 tc">
          Works
        </Link>
        <Link to="/" className={`no-underline dim black`}>
          <svg viewBox="0 0 112 148" className={`w4 ${pathname !== "/" ? "h3" : "h4"}`}>
            <use xlinkHref="#logo" />
          </svg>
        </Link>
        <Link to="/blog" className="no-underline dim black w3 tc">
          Blog
        </Link>
        <Link to="/contact" className="no-underline dim black w3 tc">
          Contact
        </Link>
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

export default withRouter(Header);
