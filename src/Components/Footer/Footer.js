import React from "react";
import SimpleLink from "../SimpleLink";

const Footer = () => {
  return (
    <footer className="w-100 ph3">
      <div className="mw8 h3 flex flex-column justify-center items-center center tc">
        <p className="lh-copy f6">
          Made with{" "}
          <span role="img" aria-label="Heart">
            🖤
          </span>{" "}
          for the world, <SimpleLink href="//github.com/juliomoreira/juliomoreira.github.io">grab the code here</SimpleLink>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
