import React from "react";
import { Link } from "react-router-dom";

const SimpleLink = ({ children, ...props }) => {
  const classes = "b no-underline black bl-0 bt-0 br-0 bb b--dotted dim georgia i";
  return props.to ? (
    <Link className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <a href="/" className={classes} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default SimpleLink;
