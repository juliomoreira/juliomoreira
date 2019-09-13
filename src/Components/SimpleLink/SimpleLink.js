import React from "react";

const SimpleLink = ({ children, ...props }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" className="b no-underline black bl-0 bt-0 br-0 bb b--dotted dim georgia i" {...props}>
      {children}
    </a>
  );
};

export default SimpleLink;
