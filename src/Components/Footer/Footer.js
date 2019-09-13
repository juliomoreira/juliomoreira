import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 ph3">
      <div className="mw8 h3 flex flex-column justify-center items-center center tc">
          <p className="lh-copy f6">
            Made with{" "}
            <span role="img" aria-label="Heart">
              🖤
            </span>{" "}
            for the world,{" "}
            <a
              className="no-underline black dim bb bl-0 bt-0 br-0 b--dotted georgia i b"
              href="//github.com/juliomoreira/juliomoreira.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              grab the code here
            </a>
            .
          </p>
      </div>
    </footer>
  );
};

export default Footer;
