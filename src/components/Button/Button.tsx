import React from "react";
import { Link, LinkProps } from "react-router-dom";

export const Button: React.FC<LinkProps> = ({ children, ...props }) => (
  <Link className="dib no-underline pv3 ph4 bg-black white br-pill" {...props}>
    {children}
  </Link>
);
