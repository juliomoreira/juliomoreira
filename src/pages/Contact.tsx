import React from "react";
import { SimpleLink } from "../components";

export const Contact = () => (
  <section className="w-100 ph3">
    <div className="mw8 center tc">
      <h1 className="lh-copy f1 fw5 serif">Contact</h1>
      <p className="lh-copy">
        Feel free to contact-me at:{" "}
        <SimpleLink external to="mailto:hello@juliomoreira.pro">
          hello@juliomoreira.pro
        </SimpleLink>
      </p>
      <p className="lh-copy">
        You can find me on{" "}
        <SimpleLink external to="//github.com/juliomoreira">
          Github
        </SimpleLink>{" "}
        making contributions and stalking{" "}
        <SimpleLink external to="//github.com/juliomoreira?tab=stars">
          some cool projects
        </SimpleLink>
        .
      </p>
      <p className="lh-copy">
        You can check out some REALLY OLD stuff I've posted on{" "}
        <SimpleLink external to="//dribbble.com/juliomoreira">
          Dribbble
        </SimpleLink>{" "}
        &amp;{" "}
        <SimpleLink external to="//behance.net/julio_moreira">
          Behance
        </SimpleLink>
        .
      </p>
    </div>
  </section>
);
