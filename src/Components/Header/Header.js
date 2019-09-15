import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = props => {
  const { location: { pathname = "" } = {} } = props;
  const isFixed = pathname !== "/";
  return (
    <>
      <header className={`w-100 ph3 ${isFixed ? "fixed bg-white z-999" : ""}`}>
        <div className="mw8 center">
          <nav className="flex justify-between items-center h4">
            <Link to="/about" className="no-underline dim black">
              About
            </Link>
            <Link to="/works" className="no-underline dim black">
              Works
            </Link>
            <Link to="/" className={`no-underline dim black w3 tc pa2`}>
              <svg viewBox="0 0 112 148" className={`mw-100 h-100`}>
                <use xlinkHref="#logo" />
              </svg>
            </Link>
            <Link to="/blog" className="no-underline dim black">
              Blog
            </Link>
            <Link to="/contact" className="no-underline dim black">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      {isFixed ? <div className="w-100 h4"></div> : ""}
    </>
  );
};

export default withRouter(Header);
