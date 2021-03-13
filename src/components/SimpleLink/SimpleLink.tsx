import React from "react";
import { Link, LinkProps } from "react-router-dom";

const classes =
  "b no-underline black bl-0 bt-0 br-0 bb b--dotted dim georgia i";

const defaultProps = {
  to: "/",
  className: classes,
  target: "_blank",
  rel: "noopener noreferrer",
};

interface SimpleLinkProps extends LinkProps {
  external?: boolean;
}

export const SimpleLink: React.FC<SimpleLinkProps> = ({
  external,
  ...props
}) => (
  <Link className={classes} {...(external ? defaultProps : null)} {...props} />
);
