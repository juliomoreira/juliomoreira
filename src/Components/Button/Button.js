import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, ...props }) => {
  return (
    <Link className="dib no-underline pv3 ph4 bg-black white br-pill" {...props}>
      {children}
    </Link>
  );
};

export default Button;
