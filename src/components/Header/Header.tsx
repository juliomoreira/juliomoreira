import React from "react";
import { Link, useHistory } from "react-router-dom";

export const Header = () => {
  const { location: { pathname = "" } = {} } = useHistory();
  const isFixed = pathname !== "/";
  return (
    <>
      <header className={`w-100 ph3 ${isFixed ? "fixed bg-white z-999" : ""}`}>
        <div className="mw6 center">
          <nav className="flex justify-around items-center h4">
            <Link to="/about" className="no-underline dim black">
              About
            </Link>
            <Link to="/" className={`no-underline dim black w3 tc pa2`}>
              <svg viewBox="0 0 112 148" className={`mw-100 h-100`}>
                <use xlinkHref="#logo" />
              </svg>
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
