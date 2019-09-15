import React from "react";
import SimpleLink from "../../Components/SimpleLink";

const Contact = () => (
  <section className="w-100 ph3">
    <div className="mw8 center tc">
      <h1 className="lh-copy f1 fw5 serif">Contact</h1>
      <p className="lh-copy">
        Feel free to contact-me at: <SimpleLink href="mailto:hello@juliomoreira.pro">hello@juliomoreira.pro</SimpleLink>
      </p>
      <p className="lh-copy">
        You can find me on <SimpleLink href="//github.com/juliomoreira">Github</SimpleLink> making contributions and stalking{" "}
        <SimpleLink href="//github.com/juliomoreira?tab=stars">some cool projects</SimpleLink>.
      </p>
      <p className="lh-copy">
        You can also check some old stuff I've posted online on <SimpleLink href="//dribbble.com/juliomoreira">Dribbble</SimpleLink> &{" "}
        <SimpleLink href="//behance.net/julio_moreira">Behance</SimpleLink>.
      </p>
    </div>
  </section>
);

export default Contact;
